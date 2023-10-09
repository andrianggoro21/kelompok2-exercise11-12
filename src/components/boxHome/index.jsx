import { Stack, Heading, Text, Button, Image, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BoxHome = () => {
  return (
    <Stack gap="2em" align="center" justify="center" minH="100vh">
      <Image src="/images/logo.png" w="12em"></Image>
      <Heading as="h2" maxW="70%">
        See what's happening in the world right now
      </Heading>
      <Stack w="18em">
        <Text fontWeight="bold" fontSize="1.5em">
          Join now
        </Text>
        <Link to="Register">
          <Button colorScheme="twitter" borderRadius="5em" w="100%">
            Create account
          </Button>
        </Link>
        <Text fontSize="0.6em" fontWeight="medium" te>
          By signing up, you agree to the
          <Text as="span" color="cyan.700">
            {" "}
            Terms of Service{" "}
          </Text>
          and
          <Text as="span" color="cyan.700">
            {" "}
            Privacy Policy{" "}
          </Text>
          ,
          <Text as="span" color="cyan.700">
            {" "}
            Cookies Use.
          </Text>
        </Text>
        <Divider orientation="horizontal" background="black"></Divider>
        <Text fontWeight="medium">Already have an account?</Text>
        <Link to="Login">
          <Button
            variant="outline"
            colorScheme="twitter"
            borderRadius="5em"
            w="100%"
          >
            Sign in
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default BoxHome;
