import { Box, CheckboxCards, Text } from "@radix-ui/themes"

enum VeggieCategoryName {
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
    { name: VeggieCategoryName.Cruciferous, frequency: Frequency.Daily },
    { name: VeggieCategoryName.LeafyGreen, frequency: Frequency.Daily },
    { name: VeggieCategoryName.Allium, frequency: Frequency.VeryFrequent },
    { name: VeggieCategoryName.HighFiber, frequency: Frequency.Daily },
    { name: VeggieCategoryName.HealthyFats, frequency: Frequency.VeryFrequent },
    { name: VeggieCategoryName.Starchy, frequency: Frequency.Often },
    { name: VeggieCategoryName.Mushrooms, frequency: Frequency.Often }
];

function CategoryFilters() {

    return (
        <Box maxWidth="150px">
            <Text>Category filters</Text>
        </Box>
    )
}

export default CategoryFilters