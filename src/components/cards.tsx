import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"


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