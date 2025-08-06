from .constants import Category, Frequency, Seasons, Functions, Color

def create_allium(name, overrides=None):
    """ Creates an allium with common defaults """
    base = {
        'category': Category.ALLIUM,
        'frequency': Frequency.REGULARLY,
        'seasons': [Seasons.FALL],
        'functions': [],
        'nutrition': [],
        'colors': [Color.GREEN]
    }

    if overrides:
        base.update(overrides)

    base['name'] = name
    return base


ALLIUM_DATA = [

    create_allium('Chives', {
        'seasons': [Seasons.SPRING, Seasons.SUMMER],
        'colors': [Color.GREEN]
    }),

    create_allium('Garlic', {
        'seasons': [Seasons.SUMMER, Seasons.FALL],
        'colors': [Color.WHITE]
    }),

    create_allium('Leeks', {
        'seasons': [Seasons.FALL, Seasons.WINTER],
        'colors': [Color.WHITE]
    }),

    create_allium('Red Onions', {
        'colors': [Color.PURPLE]
    }),

    create_allium('Sweet Onions', {
        'seasons': [Seasons.SPRING, Seasons.SUMMER],
        'colors': [Color.YELLOW]
    }),

    create_allium('Yellow Onions', {
        'colors': [Color.YELLOW]
    }),

    create_allium('Scallions/Green Onions', {
        'seasons': [Seasons.SPRING, Seasons.SUMMER],
        'colors': [Color.GREEN]
    }),

    create_allium('Shallots', {
        'seasons': [Seasons.SUMMER, Seasons.FALL],
        'colors': [Color.PURPLE]
    }),


]