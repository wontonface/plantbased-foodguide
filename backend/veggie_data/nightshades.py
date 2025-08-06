from .constants import Category, Frequency, Seasons, Functions, Color

def create_nightshade(name, overrides=None):
    """ Creates a nightshade with common defaults """
    base = {
        'category': Category.NIGHTSHADE,
        'frequency': Frequency.REGULARLY,
        'seasons': [Seasons.SUMMER],
        'functions': [],
        'nutrition': [],
        'colors': [Color.RED]
    }

    if overrides:
        base.update(overrides)

    base['name'] = name
    return base



NIGHTSHADE_DATA = [

    create_nightshade('Green Bell Peppers', {
        'colors': [Color.GREEN]
    }),

    create_nightshade('Red Bell Peppers'),

    create_nightshade('Yellow Bell Peppers', {
        'colors': [Color.YELLOW]
    }),

    create_nightshade('Cherry Tomatoes'),

    create_nightshade('Eggplant', {
        'colors': [Color.PURPLE]
    }),

    create_nightshade('Jalapeño Peppers', {
        'colors': [Color.GREEN]
    }),

    create_nightshade('Beefsteak Tomatoes'),

    create_nightshade('Roma Tomatoes')

]