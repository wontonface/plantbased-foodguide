from .constants import Category, Frequency, Seasons, Functions, Color

def create_squash(name, overrides=None):
    """ Creates a squash with common defaults """
    base = {
        'category': Category.SQUASH,
        'frequency': Frequency.REGULARLY,
        'seasons': [Seasons.FALL, Seasons.WINTER],
        'functions': [],
        'nutrition': [],
        'colors': [Color.ORANGE]
    }

    if overrides:
        base.update(overrides)

    base['name'] = name
    return base

SQUASH_DATA = [

    create_squash('Acorn Squash'),

    create_squash('Butternut Squash'),

    create_squash('Carnival Squash'),

    create_squash('Cheese Pumpkin Squash'),

    create_squash('Cucumber', {
        'seasons': [Seasons.SUMMER],
        'color': [Color.GREEN]
    }),

    create_squash('Delicata Squash'),

    create_squash('Hubbard Squash', {
        'colors': [Color.BLUE, Color.GREEN, Color.ORANGE]
    }),

    create_squash('Kabocha Squash'),

    create_squash('Golden Acorn Squash'),

    create_squash('Red Kuri Squash'),

    create_squash('Spaghetti Squash', {
        'colors': [Color.YELLOW]
    }),

    create_squash('Pumpkin Sugar Pie Squash'),

    create_squash('Sweet Dumpling Squash'),

    create_squash('Turban Squash'),

    create_squash('Winter Squash'),

    create_squash('Yellow Squash', {
        'seasons': [Seasons.SUMMER],
        'color': [Color.YELLOW]
    }),

    create_squash('Zucchini', {
        'seasons': [Seasons.SUMMER],
        'color': [Color.GREEN]
    })

]