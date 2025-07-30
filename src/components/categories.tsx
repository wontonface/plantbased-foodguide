import { Box, CheckboxCards, Flex, Text } from "@radix-ui/themes"

export enum VeggieCategoryName {
    Cruciferous = "Cruciferous",
    LeafyGreen = "Leafy green",
    Allium = "Allium",
    HighFiber = "High-fiber",
    NonStarchy = "Non-starchy",
    HealthyFats = "Healthy fats",
    Starchy = "Starchy",
    Mushrooms = "Mushrooms"
};

export enum Frequency {
    Rarely = 1,
    Occasionally = 2,
    Regularly = 3,
    Frequently = 4,
    VeryFrequently = 5
};

export type VeggieCategory = {
    name: VeggieCategoryName;
    frequency: Frequency;
};

const veggieCategories: VeggieCategory[] = [
    { name: VeggieCategoryName.Cruciferous, frequency: Frequency.VeryFrequently },
    { name: VeggieCategoryName.LeafyGreen, frequency: Frequency.VeryFrequently },
    { name: VeggieCategoryName.Allium, frequency: Frequency.Frequently },
    { name: VeggieCategoryName.HighFiber, frequency: Frequency.VeryFrequently },
    { name: VeggieCategoryName.HealthyFats, frequency: Frequency.Frequently },
    { name: VeggieCategoryName.Starchy, frequency: Frequency.VeryFrequently },
    { name: VeggieCategoryName.Mushrooms, frequency: Frequency.VeryFrequently }
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
