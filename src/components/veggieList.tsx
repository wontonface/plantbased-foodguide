import { useVeggies } from '../hooks/useVeggies';
import VeggieCard from './cards';
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"

function VeggieList() {
    const { veggies, loading, error } = useVeggies();

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
                {veggies.map(veggie => (
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