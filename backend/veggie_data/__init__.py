from .cruciferous import CRUCIFEROUS_DATA
from .mushrooms import MUSHROOMS_DATA
from .squash import SQUASH_DATA

VEGGIE_DATA = (
    CRUCIFEROUS_DATA +
    MUSHROOMS_DATA +
    SQUASH_DATA
)

CATEGORIES = {
    'cruciferous': CRUCIFEROUS_DATA,
    'mushrooms': MUSHROOMS_DATA,
    'squash': SQUASH_DATA
}