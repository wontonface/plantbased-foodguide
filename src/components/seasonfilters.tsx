import { Box, CheckboxCards, Text } from "@radix-ui/themes"
import { Season } from "../types/veggie";


function SeasonFilters({ selectedSeasons, onSelectionChange}: {
    selectedSeasons: string[];
    onSelectionChange: (seasons: string[]) => void;
}) {

    return (
        <Box maxWidth="900px">
            <CheckboxCards.Root 
                value={selectedSeasons}
                onValueChange={onSelectionChange} 
                columns={{ initial: "1", sm: "4"}}
                size="3"
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