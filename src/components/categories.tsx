import { Box, CheckboxCards, Flex, Text } from "@radix-ui/themes"

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
        <Box maxWidth="900px">
            <CheckboxCards.Root defaultValue={["1"]} columns={{ initial: "1", sm: "4"}}>
                {veggieCategories.map((category, index) => (
                    <CheckboxCards.Item key={index} value={index.toString()}>
                        <Flex direction="column" width="100%">
                            <Text weight="bold">{category.name}</Text>
                            <Text>Frequency: {category.frequency}</Text>
                    </Flex>
                    </CheckboxCards.Item>
                ))}

            </CheckboxCards.Root>
            {/* <Text>Category filters</Text> */}
        </Box>
    )
}

export default CategoryFilters