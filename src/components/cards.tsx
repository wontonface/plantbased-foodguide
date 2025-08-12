import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"
import { useVeggies } from '../hooks/useVeggies';


function VeggieCard( { veggie }) {

    return (
        <Box maxWidth="900px">
            <Card>
                <Flex gap="3" align="center">
                    <Avatar
                        size="3"
                        src="https://unsplash.com/photos/green-broccoli-on-white-background-q7BJL1qZ1Bw"
                        radius="full"
                        fallback={veggie.name.charAt(0).toUpperCase()}
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            {veggie.name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {veggie.category}
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </Box>
    )
}

export default VeggieCard