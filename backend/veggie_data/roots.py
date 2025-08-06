from .constants import Category, Frequency, Seasons, Functions, Color


def create_root(name, overrides=None):
    """ Creates a root veggie with common defaults """
    base = {
        'category': Category.ROOT,
        'frequency': Frequency.REGULARLY,
        'seasons': [Seasons.FALL, Seasons.WINTER],
        'functions': [],
        'nutrition': [],
        'colors': [Color.YELLOW]
    }

    if overrides:
        base.update(overrides)

    base['name'] = name
    return base


ROOTS_DATA = [

    create_root('Beets', {
        'colors': [Color.RED]
    }),

    create_root('Carrots', {
        'colors': [Color.ORANGE]
    }),

    create_root('Carrots (Purple)', {
        'colors': [Color.PURPLE]
    }),

    create_root('Daikon Radish', {
        'colors': [Color.WHITE]
    }),

    create_root('Golden Beets'),

    create_root('Jicama', {
        'colors': [Color.WHITE]
    }),

    create_root('Parsnips', {
        'colors': [Color.WHITE]
    }),

    create_root('Red Potatoes', {
        'seasons': [Seasons.FALL],
        'colors': [Color.RED]
    }),

    create_root('Russet Potatoes', {
        'seasons': [Seasons.FALL],
        'colors': [Color.BROWN]
    }),

    create_root('Yukon Gold Potatoes', {
        'seasons': [Seasons.FALL],
        'colors': [Color.YELLOW]
    }),

    create_root('Rutabaga'),

    create_root('Sweet Potatoes', {
        'seasons': [Seasons.FALL],
        'colors': [Color.ORANGE]
    }),

    create_root('Turnips', {
        'colors': [Color.WHITE]
    })

]