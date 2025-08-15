import { useMemo } from 'react';
import { filterVeggiesBySeasons } from '../utils/veggieFilters';
import { useVeggies } from '../hooks/useVeggies';
import VeggieCard from './cards';
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"

function VeggieList({ selectedSeasons }: { selectedSeasons: string[] }) {
    console.log("VeggieList rendering with selectedSeasons:", selectedSeasons);
    const { veggies, loading, error } = useVeggies();
    const filteredVeggies = useMemo(
        () => filterVeggiesBySeasons(veggies, selectedSeasons),
        [selectedSeasons]
    );

    if (loading) {
        return <div>Loading veggies...</div>;
    }

    if (error) {
        return <div>An error occurred: {error}</div>;
    }

    return (
        <Box>
            <Text size="4">
                Veggies found: {veggies.length}
            </Text>
            <Flex direction="column" gap="3">
                {filteredVeggies.map(veggie => (
                    <VeggieCard
                        key={veggie.name}
                        veggie={veggie}
                    />
                ))}
            </Flex>
        </Box>
    )
}

export default VeggieList;