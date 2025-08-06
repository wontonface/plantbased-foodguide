from .constants import Category, Frequency, Seasons, Functions, Color

def create_legume(name, overrides=None):
    """ Creates a legume with common defaults """
    base = {
        'category': Category.LEGUME,
        'frequency': Frequency.REGULARLY,
        'seasons': [Seasons.SUMMER],
        'functions': [],
        'nutrition': [],
        'colors': [Color.GREEN]
    }

    if overrides:
        base.update(overrides)

    base['name'] = name
    return base


LEGUME_DATA = [

    create_legume('Edamame'),

    create_legume('Green Beans'),

    create_legume('Lima Beans'),

    create_legume('Peas', {
        'seasons': [Seasons.SPRING]
    }),

    create_legume('Snow Peas', {
        'seasons': [Seasons.SPRING]
    }),

    create_legume('Sugar Snap Peas', {
        'seasons': [Seasons.SPRING]
    })

]