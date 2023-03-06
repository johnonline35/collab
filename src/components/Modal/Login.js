import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Flex height='100vh' alignItems='center' justifyContent='center'>
        <Flex direction='column' bg='gray.100' p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input
            placeholder='name@email.com'
            variant='filled'
            mb={3}
            type='email'
          />
          <Input
            placeholder='password'
            variant='filled'
            mb={6}
            type='password'
          />
          <Button colorScheme='blue'>Log in</Button>
          <Flex direction='row'>
            <List color='white' fontSize='1.2em' spacing={4}>
              <ListItem>
                <Link import {...NextLink} href='/signup'>
                  Don't have an account? Sign up.
                </Link>
              </ListItem>
              <ListItem>
                <Link import {...NextLink} href='/privacy'>
                  Privacy Policy
                </Link>
              </ListItem>
              <ListItem>
                <Link import {...NextLink} href='/tos'>
                  Terms of Service
                </Link>
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
