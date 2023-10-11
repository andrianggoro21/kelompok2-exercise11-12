import { Flex } from "@chakra-ui/react";
import BoxRegister from "../../components/boxRegister";

const Register = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="twitter.100"
    >
      <BoxRegister />
    </Flex>
  );
};

export default Register;
