from .alliums import ALLIUM_DATA
from .cruciferous import CRUCIFEROUS_DATA
from .leafygreens import LEAFYGREEN_DATA
from .legumes import LEGUME_DATA
from .mushrooms import MUSHROOMS_DATA
from .nightshades import NIGHTSHADE_DATA
from .roots import ROOTS_DATA
from .stalk import STALK_DATA
from .squash import SQUASH_DATA

VEGGIE_DATA = (
    ALLIUM_DATA +
    CRUCIFEROUS_DATA +
    LEAFYGREEN_DATA +
    LEGUME_DATA +
    MUSHROOMS_DATA +
    NIGHTSHADE_DATA +
    ROOTS_DATA +
    STALK_DATA +
    SQUASH_DATA
)

CATEGORIES = {
    'alliums': ALLIUM_DATA,
    'cruciferous': CRUCIFEROUS_DATA,
    'leafygreen': LEAFYGREEN_DATA,
    'legumes': LEGUME_DATA,
    'mushrooms': MUSHROOMS_DATA,
    'nightshades': NIGHTSHADE_DATA,
    'roots': ROOTS_DATA,
    'stalks': STALK_DATA,
    'squash': SQUASH_DATA
}