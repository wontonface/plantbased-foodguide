import sqlite3

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

def populate_sample_data():
    conn = sqlite3.connect('veggies.db')
    cursor = conn.cursor()
    
    # Clear existing data
    cursor.execute('DELETE FROM veggie_colors')
    cursor.execute('DELETE FROM veggie_nutrition')
    cursor.execute('DELETE FROM veggie_functions')
    cursor.execute('DELETE FROM veggie_seasons')
    cursor.execute('DELETE FROM veggies')
    
    # Insert arugula
    cursor.execute(
        'INSERT INTO veggies (name, category, frequency) VALUES (?, ?, ?)',
        ('Arugula', 'Cruciferous', 'VeryFrequently')
    )
    arugula_id = cursor.lastrowid
    
    # Insert Arugula relationships
    cursor.execute('INSERT INTO veggie_seasons VALUES (?, ?)', (arugula_id, 'Spring'))
    cursor.execute('INSERT INTO veggie_seasons VALUES (?, ?)', (arugula_id, 'Fall'))
    cursor.execute('INSERT INTO veggie_functions VALUES (?, ?)', (arugula_id, 'AntiInflammatory'))
    cursor.execute('INSERT INTO veggie_nutrition VALUES (?, ?)', (arugula_id, 'WaterSoluble'))
    cursor.execute('INSERT INTO veggie_colors VALUES (?, ?)', (arugula_id, 'Green'))
    
    # Insert artichokes
    cursor.execute(
        'INSERT INTO veggies (name, category, frequency) VALUES (?, ?, ?)',
        ('Artichokes', 'HighFiber', 'VeryFrequently')
    )
    artichoke_id = cursor.lastrowid
    
    # Insert artichoke relationships
    cursor.execute('INSERT INTO veggie_seasons VALUES (?, ?)', (artichoke_id, 'Spring'))
    cursor.execute('INSERT INTO veggie_seasons VALUES (?, ?)', (artichoke_id, 'Fall'))
    cursor.execute('INSERT INTO veggie_functions VALUES (?, ?)', (artichoke_id, 'GutHealth'))
    cursor.execute('INSERT INTO veggie_colors VALUES (?, ?)', (artichoke_id, 'Green'))
    
    conn.commit()
    conn.close()
    print("Sample data inserted successfully!")

def main():
    print("Setting up database...")
    create_tables()
    populate_sample_data()
    print("Database setup complete!")

if __name__ == '__main__':
    main()