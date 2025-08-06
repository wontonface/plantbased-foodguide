from .constants import Category, Frequency, Seasons, Functions, Color

def create_stalk(name, overrides=None):
    """ Creates a stalk veggie with common defaults """
    base = {
        'category': Category.STALK,
        'frequency': Frequency.REGULARLY,
        'seasons': [Seasons.FALL, Seasons.WINTER],
        'functions': [],
        'nutrition': [],
        'colors': [Color.GREEN]
    }

    if overrides:
        base.update(overrides)

    base['name'] = name
    return base


STALK_DATA = [
    
    create_stalk('Asparagus', {
        'seasons': [Seasons.SPRING]
    }),

    create_stalk('Celery'),

    create_stalk('Fennel', {
        'colors': [Color.WHITE]
    }),

    create_stalk('Rhubarb', {
        'seasons': [Seasons.SPRING, Seasons.SUMMER],
        'colors': [Color.RED]
    })
]