from .constants import Category, Frequency, Seasons, Functions, Color

def create_cruciferous(name, overrides=None):
    """ Creates a cruciferous with common defaults """
    base = {
        'category': Category.CRUCIFEROUS,
        'frequency': Frequency.VERY_FREQUENTLY,
        'seasons': [Seasons.FALL, Seasons.WINTER],
        'functions': [],
        'nutrition': [],
        'colors': [Color.GREEN]
    }

    if overrides:
        base.update(overrides)

    base['name'] = name
    return base


CRUCIFEROUS_DATA = [

    create_cruciferous('Arugula', {
        'seasons': [Seasons.SPRING, Seasons.FALL]
    }),

    create_cruciferous('Bok Choy'),

    create_cruciferous('Broccoli', {
        'seasons': [Seasons.SPRING, Seasons.FALL]
    }),

    create_cruciferous('Broccolini', {
        'seasons': [Seasons.SPRING, Seasons.FALL]
    }),

    create_cruciferous('Brussels Sprouts'),

    create_cruciferous('Cabbage (Green)'),

    create_cruciferous('Cabbage (Red)', {
        'colors': [Color.PURPLE]
    })

]