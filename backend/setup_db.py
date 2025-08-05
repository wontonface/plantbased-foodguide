import sqlite3
import sys

def create_tables():
    conn = sqlite3.connect('veggies.db')
    cursor = conn.cursor()
    
    # Create main veggies table
    cursor.execute("""
         --begin-sql
        CREATE TABLE IF NOT EXISTS veggies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(100) UNIQUE NOT NULL,
            category VARCHAR(50) NOT NULL,
            frequency VARCHAR(50) NOT NULL
        )
    """)
    
    # Create relationship tables
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS veggie_seasons (
            veggie_id INTEGER,
            season VARCHAR(20),
            FOREIGN KEY (veggie_id) REFERENCES veggies(id)
        )
    """)
    
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS veggie_functions (
            veggie_id INTEGER,
            function_benefit VARCHAR(100),
            FOREIGN KEY (veggie_id) REFERENCES veggies(id)
        )
    """)
    
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS veggie_nutrition (
            veggie_id INTEGER,
            nutrient_benefit VARCHAR(100),
            FOREIGN KEY (veggie_id) REFERENCES veggies(id)
        )
    """)
    
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS veggie_colors (
            veggie_id INTEGER,
            color_group VARCHAR(50),
            FOREIGN KEY (veggie_id) REFERENCES veggies(id)
        )
    """)
    
    conn.commit()
    conn.close()
    print("Tables created successfully!")


def insert_veggie_data(cursor, veggie_data):

    # Reusable function
    for veggie in veggie_data:
        cursor.execute(
            'INSERT INTO veggies (name, category, frequency) VALUES (?, ?, ?)',
            (veggie['name'], veggie['category'], veggie['frequency'])
        )
        veggie_id = cursor.lastrowid
        
        # Insert relationships
        for season in veggie['seasons']:
            cursor.execute('INSERT INTO veggie_seasons VALUES (?, ?)', (veggie_id, season))
        
        for function in veggie['functions']:
            cursor.execute('INSERT INTO veggie_functions VALUES (?, ?)', (veggie_id, function))
        
        for nutrition in veggie['nutrition']:
            cursor.execute('INSERT INTO veggie_nutrition VALUES (?, ?)', (veggie_id, nutrition))
        
        for color in veggie['colors']:
            cursor.execute('INSERT INTO veggie_colors VALUES (?, ?)', (veggie_id, color))


def populate_sample_data():
    conn = sqlite3.connect('veggies.db')
    cursor = conn.cursor()
    
    # Clear existing data
    cursor.execute('DELETE FROM veggie_colors')
    cursor.execute('DELETE FROM veggie_nutrition')
    cursor.execute('DELETE FROM veggie_functions')
    cursor.execute('DELETE FROM veggie_seasons')
    cursor.execute('DELETE FROM veggies')
    
    sample_data = [
        {
            'name': 'Arugula',
            'category': 'Cruciferous',
            'frequency': 'VeryFrequently',
            'seasons': ['Spring', 'Fall'],
            'functions': ['AntiInflammatory'],
            'nutrition': ['WaterSoluble'],
            'colors': ['Green']
        },
        {
            'name': 'Shiitake',
            'category': 'Mushroom',
            'frequency': 'Occasionally',
            'seasons': ['Fall', 'Winter'],
            'functions': ['ImmuneSupport'],
            'nutrition': ['Protein', 'BVitamins'],
            'colors': ['Brown']
        }
    ]
    
    insert_veggie_data(cursor, sample_data)
    
    conn.commit()
    conn.close()
    print(f"Sample data inserted successfully ({len(sample_data)} veggies)")


def load_all_veggies():
    from veggie_data import VEGGIE_DATA

    conn = sqlite3.connect('veggies.db')
    cursor = conn.cursor()
    
    # Clear existing data
    cursor.execute('DELETE FROM veggie_colors')
    cursor.execute('DELETE FROM veggie_nutrition')
    cursor.execute('DELETE FROM veggie_functions')
    cursor.execute('DELETE FROM veggie_seasons')
    cursor.execute('DELETE FROM veggies')
    
    insert_veggie_data(cursor, VEGGIE_DATA)
    
    conn.commit()
    conn.close()
    print(f"Loaded {len(VEGGIE_DATA)} veggies into database")

def load_categories(category_names):
    from veggie_data import CATEGORIES
    conn = sqlite3.connect('veggies.db')
    cursor = conn.cursor()
    
    # Clear existing data
    cursor.execute('DELETE FROM veggie_colors')
    cursor.execute('DELETE FROM veggie_nutrition')
    cursor.execute('DELETE FROM veggie_functions')
    cursor.execute('DELETE FROM veggie_seasons')
    cursor.execute('DELETE FROM veggies')
    
    # Combine selected categories using your CATEGORIES dict
    selected_data = []
    for category in category_names:
        if category in CATEGORIES:
            selected_data.extend(CATEGORIES[category])
            print(f"Including {category}: {len(CATEGORIES[category])} veggies")
        else:
            available = list(CATEGORIES.keys())
            print(f"Warning: Category '{category}' not found. Available: {available}")
    
    if selected_data:
        insert_veggie_data(cursor, selected_data)
        
    conn.commit()
    conn.close()
    print(f"Loaded {len(selected_data)} veggies from selected categories")

def main(use_full_data=False):
    print("Setting up database...")
    create_tables()

    if '--full' in sys.argv:
        print("Loading full dataset...")
        load_all_veggies()

    elif '--categories' in sys.argv:
        # Find categories after --categories flag
        try:
            cat_index = sys.argv.index('--categories') + 1
            if cat_index < len(sys.argv):
                categories = sys.argv[cat_index].split(',')
                print(f"Loading categories: {categories}")
                load_categories(categories)
            else:
                print("Error: No categories specified after --categories")
                return
        except (ValueError, IndexError):
            print("Error: Invalid --categories usage")
            return
        
    else:
        print("Loading sample data...")
        populate_sample_data()
    
    print("Database setup complete!")

if __name__ == '__main__':
    main()