import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  Breadcrumb,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
  return (
    <VStack spacing={10}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign="center"
          >
            Welcome to Solana
          </Heading>

          <Text color="bodyText" fontSize="xl" textAlign="center">
          Blockchain technology is the most disruptive force in years, 
          and amongst the various blockchains is the shining star that is Solana. Lets go along...
          </Text>
        </VStack>
      </Container>

      
      <Image w="70%" src="certification.png" alt="" />
       
      

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>download</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected
