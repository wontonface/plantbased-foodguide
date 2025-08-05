from .constants import Category, Frequency, Seasons, Functions, Color

def create_mushroom(name, overrides=None):
    """ Creates a mushroom with common defaults: regular frequency, all seasons, white color """
    base = {
        'category': Category.MUSHROOMS,
        'frequency': Frequency.REGULARLY,
        'seasons': [Seasons.SPRING, Seasons.SUMMER, Seasons.FALL, Seasons.WINTER],
        'functions': [],
        'nutrition': [],
        'colors': [Color.WHITE]
    }

    if overrides:
        base.update(overrides)

    base['name'] = name
    return base

MUSHROOMS_DATA = [
    
    create_mushroom('Button Mushroom'),

    create_mushroom('Chanterelle', {
        'seasons': [Seasons.FALL],
        'colors': [Color.ORANGE]
    }),

    create_mushroom('Cremini'),

    create_mushroom('Enoki'),

    create_mushroom('King Oyster'),

    create_mushroom("Lion's Mane", {
        'seasons': [Seasons.FALL, Seasons.WINTER],
    }),

    create_mushroom('Maitake', {
        'seasons': [Seasons.FALL],
    }),

    create_mushroom('Morel', {
        'seasons': [Seasons.SPRING],
    }),

    create_mushroom('Oyster Mushroom'),

    create_mushroom('Porcini', {
        'seasons': [Seasons.FALL],
    }),

    create_mushroom('Portobello'),

    create_mushroom('Shiitake')
]