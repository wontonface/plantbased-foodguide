from .constants import Category, Frequency, Seasons, Functions, Color

def create_leafygreen(name, overrides=None):
    """ Creates a leafy green with common defaults """
    base = {
        'category': Category.LEAFY,
        'frequency': Frequency.REGULARLY,
        'seasons': [Seasons.SPRING, Seasons.FALL],
        'functions': [],
        'nutrition': [],
        'colors': [Color.GREEN]
    }

    if overrides:
        base.update(overrides)

    base['name'] = name
    return base


LEAFYGREEN_DATA = [

create_leafygreen('Basil', {
    'seasons': [Seasons.SUMMER]
}),

create_leafygreen('Butter Lettuce'),

create_leafygreen('Cilantro'),

create_leafygreen('Iceberg Lettuce'),

create_leafygreen('Mixed Greens'),

create_leafygreen('Parsley'),

create_leafygreen('Romaine Lettuce'),

create_leafygreen('Spinach'),

create_leafygreen('Swiss Chard')

]