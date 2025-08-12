import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"
import { CategoryIcon, SeasonIcon } from "./icons";


function VeggieCard( { veggie }) {

    return (
        <Box maxWidth="900px">
            <Card size="3">
                <Flex gap="5" align="start">

                    <Avatar
                        size="5"
                        src="https://unsplash.com/photos/green-broccoli-on-white-background-q7BJL1qZ1Bw"
                        radius="large"
                        fallback={veggie.name.charAt(0).toUpperCase()}
                    />
                    <Box>
                        {/* Text container */}
                        <Flex gap="3" direction="column">

                            {/* Name */}
                            <Text as="div" size="6" weight="bold">
                                {veggie.name}
                            </Text>

                            {/* Category */}
                            <Flex gap="2" align="center">
                                <CategoryIcon /> 
                                <Text as="div" size="4" color="gray" trim="both">
                                {veggie.category}
                                </Text>
                            </Flex>

                            {/* Season */}
                            <Flex gap="2" align="center">
                                <SeasonIcon /> 
                                <Text as="div" size="4" color="gray" trim="both">
                                {veggie.season.join(", ")}
                                </Text>
                            </Flex>
                            
                        </Flex>
                        
                    </Box>
                </Flex>
            </Card>
        </Box>
    )
}

export default VeggieCard