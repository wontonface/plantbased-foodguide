import { Box, CheckboxCards, Text } from "@radix-ui/themes"
import { Season } from "../types/veggie";

function getCurrentSeason(): string {
    const now = new Date();
    const month = now.getMonth();

    if (month >= 2 && month <= 4) {
        return Season.SPRING;
    } else if (month >= 5 && month <= 7) {
        return Season.SUMMER;
    } else if (month >= 8 && month <= 10) {
        return Season.FALL;
    } else {
        return Season.WINTER;
    }
}

function SeasonFilters() {
    console.log("SeasonFilters rendering");
    console.log("Season object:", Season);
    console.log("Season values:", Object.values(Season));


    const currentSeason = getCurrentSeason();

    return (
        <Box maxWidth="900px">
            <CheckboxCards.Root 
                defaultValue={[currentSeason]} 
                columns={{ initial: "1", sm: "4"}}
            >
                {Object.values(Season).map((seasonValue) => (
                    <CheckboxCards.Item key={seasonValue} value={seasonValue}>
                        <Text weight="bold">{seasonValue}</Text>
                    </CheckboxCards.Item>
                ))}
            </CheckboxCards.Root>
        </Box>

    )
}

export default SeasonFilters