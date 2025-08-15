from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
import traceback

app = Flask(__name__)
CORS(app, origins=[
    "https://plantbased-foodguide.vercel.app",
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5001"
])

def get_db_connection():
    conn = sqlite3.connect('veggies.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def home():
    return jsonify({"message": "Flask server is running!", "endpoints": ["/api/health", "/api/veggies"]})

@app.route('/api/health')
def health_check():
    return jsonify({"status": "healthy", "message": "API is running!"})

@app.route('/api/veggies')
def get_veggies():
    try:
        conn = get_db_connection()
        
        # Get all veggies with their relationships
        veggies = conn.execute('SELECT * FROM veggies').fetchall()
        
        result = []
        for veggie in veggies:
            veggie_data = {
                'name': veggie['name'],
                'category': veggie['category'],
                'frequency': veggie['frequency'],
                'season': [row['season'] for row in conn.execute(
                    'SELECT season FROM veggie_seasons WHERE veggie_id = ?', 
                    (veggie['id'],)
                ).fetchall()],
                'function': [row['function_benefit'] for row in conn.execute(
                    'SELECT function_benefit FROM veggie_functions WHERE veggie_id = ?', 
                    (veggie['id'],)
                ).fetchall()],
                'nutrition': [row['nutrient_benefit'] for row in conn.execute(
                    'SELECT nutrient_benefit FROM veggie_nutrition WHERE veggie_id = ?', 
                    (veggie['id'],)
                ).fetchall()],
                'color': [row['color_group'] for row in conn.execute(
                    'SELECT color_group FROM veggie_colors WHERE veggie_id = ?', 
                    (veggie['id'],)
                ).fetchall()]
            }
            result.append(veggie_data)
        
        conn.close()
        return jsonify(result)
    
    except Exception as e:
        print(f"Error in get_veggies: {str(e)}")
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    import os
    
    # Get port from environment (set by Render) or default to 5001 for local
    port = int(os.environ.get('PORT', 5001))
    
    # 0.0.0.0 for production, 127.0.0.1 for local
    host = '0.0.0.0' if os.environ.get('PORT') else '127.0.0.1'
    
    print("Starting Flask server...")
    print(f"API will be available at: http://{host}:{port}")
    print(f"Test the API at: http://{host}:{port}/api/veggies")
    
    app.run(debug=False, host=host, port=port)