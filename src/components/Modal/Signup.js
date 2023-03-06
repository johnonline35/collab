import { Button, Flex, Heading, Input } from "@chakra-ui/react";

export default function Signup() {
  return (
    <>
      <Flex height='100vh' alignItems='center' justifyContent='center'>
        <Flex direction='column' bg='gray.100' p={12} rounded={6}>
          <Heading mb={6}>Sign up</Heading>
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
          <Input
            placeholder='re-type password'
            variant='filled'
            mb={6}
            type='password'
          />
          <Button colorScheme='blue'>Sign Up</Button>
        </Flex>
      </Flex>
    </>
  );
}
