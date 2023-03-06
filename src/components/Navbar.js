import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Spacer,
  HStack,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as='nav' p='10px' mb='40px' alignItems='center'>
      <Heading as='h1'>Dashboard</Heading>
      <Spacer />

      <HStack spacing='20px'>
        <Box bg='gray.200' p='10px'>
          J
        </Box>
        <Text>john@instantcollab.co</Text>
        <Button colorScheme='blue'>Logout</Button>
      </HStack>
    </Flex>
  );
}
