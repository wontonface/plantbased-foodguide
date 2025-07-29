import { Box, CheckboxCards, Text } from "@radix-ui/themes"

enum VeggieCategoryNames {
    Cruciferous = "Cruciferous",
    LeafyGreen = "Leafy green",
    Allium = "Allium",
    HighFiber = "High-fiber",
    NonStarchy = "Non-starchy",
    HealthyFats = "Healthy fats",
    Starchy = "Starchy",
    Mushrooms = "Mushrooms"
};
   

enum Frequency {
    Rarely = 1,
    Infrequent = 2,
    Often = 3,
    VeryFrequent = 4,
    Daily = 5
};

type VeggieCategory = {
    name: VeggieCategoryName;
    frequency: Frequency;
};

const veggieCategories: VeggieCategory[] = [
    { name: VeggieCategoryNames.Cruciferous, frequency: Frequency.Daily },
    { name: VeggieCategoryNames.LeafyGreen, frequency: Frequency.Daily },
    { name: VeggieCategoryNames.Allium, frequency: Frequency.VeryFrequent },
    { name: VeggieCategoryNames.HighFiber, frequency: Frequency.Daily },
    { name: VeggieCategoryNames.HealthyFats, frequency: Frequency.VeryFrequent },
    { name: VeggieCategoryNames.Starchy, frequency: Frequency.Often },
    { name: VeggieCategoryNames.Mushrooms, frequency: Frequency.Often }
];

function CategoryFilters() {

    return (
        <Box maxWidth="150px">
            <Text>Category filters</Text>
        </Box>
    )
}

export default CategoryFilters