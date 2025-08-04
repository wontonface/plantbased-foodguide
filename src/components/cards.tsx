import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"
import { VeggieCategoryName, Frequency } from "./categories";

enum VeggieName {
    Arugula = "Arugula",
    Artichokes = "Artichokes",
    Asparagus = "Asparagus",
    BeetGreens = "Beet Greens",
    BeetsGolden = "Golden Beets",
    BeetsRed = "Red Beets",
    BellPeppersRed = "Red Bell Peppers",
    BellPeppersYellow = "Yellow Bell Peppers",
    BellPeppersOrange = "Orange Bell Peppers",
    BellPeppersGreen = "Green Bell Peppers",
    BokChoy = "Bok Choy",
    Broccoli = "Broccoli",
    BroccoliRabe = "Broccoli Rabe",
    BrusselSprouts = "Brussel Sprouts",
    Cabbage = "Cabbage",
    CabbageNapa = "Napa Cabbage",
    CabbageRed = "Red Cabbage",
    CabbagePurple = "Purple Cabbage",
    Carrots = "Carrots",
    Cauliflower = "Cauliflower",
    Celery = "Celery",
    CherryTomatoes = "Cherry Tomatoes",
    Chives = "Chives",
    CollardGreens = "Collard Greens",
    Corn = "Corn",
    Cucumbers = "Cucumbers",
    DandelionGreens = "Dandelion Greens",
    Eggplant = "Eggplant",
    Endive = "Endive",
    Escarole = "Escarole",
    Fennel = "Fennel",
    Frisee = "Frisee",
    Garlic = "Garlic",
    GreenBeans = "Green Beans",
    GreenOnions = "Green Onions",
    Jicama = "Jicama",
    Kale = "Kale",
    Kohlrabi = "Kohlrabi",
    Leeks = "Leeks",
    LettuceButter = "Butter Lettuce",
    LettuceRomain = "Romaine Lettuce",
    LimaBeans = "Lima Beans",
    Mache = "Mache",
    Mesclun = "Mesclun",
    MixedGreens = "Mixed Greens",
    MustardGreens = "Mustard Greens",
    Okra = "Okra",
    OnionsCipollini = "Cipollini Onions",
    OnionsRed = "Red Onions",
    OnionsPearl = "Pearl Onions",
    OnionsWhite = "White Onions",
    OnionsYellow = "Yellow Onions",
    Parsnips = "Parsnips",
    Peas = "Peas",
    PeasSnap = "Snap Peas",
    PeasSnow = "Snow Peas",
    Pumpkin = "Pumpkin",
    Radicchio = "Radicchio",
    Radishes = "Radishes",
    Rutabaga = "Rutabaga",
    Scallions = "Scallions",
    Shallots = "Shallots",
    Spinach = "Spinach",
    SpinachBaby = "Baby Spinach",
    SweetPotatoes = "Sweet Potatoes",
    SwissChard = "Swiss Chard",
    Tomatoes = "Tomatoes",
    TomatoesGrape = "Grape Tomatoes",
    TurnipGreens = "Turnip Greens",
    Turnips = "Turnips",
    Watercress = "Watercress",
    SquashAcorn = "Acorn Squash",
    SquashButternut = "Butternut Squash",
    SquashDelicata = "Delicata Squash",
    SquashKabocha = "Kabocha Squash",
    SquashWinter = "Winter Squash",
    SquashYellow = "Yellow Squash",
    Zucchini = "Zucchini"
};

enum Season {
    Spring = "Spring",
    Summer = "Summer",
    Fall = "Fall",
    Winter = "Winter"
};

enum ColorGroup {
    Red = "Red",
    Orange = "Orange",
    Yellow = "Yellow",
    Green = "Green",
    Blue = "Blue",
    Purple = "Purple",
    White = "White"
};

enum FunctionalBenefit {
    AntiInflammatory = "Anti-inflammatory",
    Hydrating = "Hydrating",
    ShelfStable = "Shelf-stable",
    Neuroprotective = "Neuroprotective",
    GutHealth = "Gut health"
};

enum NutrientBenefit {
    ColorSpectrum = "Color spectrum",
    WaterSoluble = "Water-soluble",
    FatSoluble = "Fat-soluble"
};

type Veggie = {
    name: VeggieName;
    category: VeggieCategoryName;
    season: Season[];
    frequency: Frequency;
    function: FunctionalBenefit[];
    nutrition: NutrientBenefit[];
    color: ColorGroup[];
}

const veggies: Veggie[] = [
    { name: VeggieName.Arugula, category: VeggieCategoryName.Cruciferous, season: [Season.Spring, Season.Fall], frequency: Frequency.VeryFrequently, function: [FunctionalBenefit.AntiInflammatory], nutrition: [NutrientBenefit.WaterSoluble], color: [ColorGroup.Green] },
    { name: VeggieName.Artichokes, category: VeggieCategoryName.HighFiber, season: [Season.Spring, Season.Fall], frequency: Frequency.VeryFrequently, function: [FunctionalBenefit.GutHealth], nutrition: [], color: [ColorGroup.Green] },
]



function VeggieCards() {

    return (
        <Box maxWidth="900px">
            <Card>
                <Flex gap="3" align="center">
                    <Avatar
                        size="3"
                        src="https://unsplash.com/photos/green-broccoli-on-white-background-q7BJL1qZ1Bw"
                        radius="full"
                        fallback="K"
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            Kale
                        </Text>
                        <Text as="div" size="2" color="gray">
                            Cruciferous
                        </Text>
                    </Box>
                </Flex>
            </Card>
            <Text>Veggie Cards</Text> 
        </Box>
    )
}

export default VeggieCards