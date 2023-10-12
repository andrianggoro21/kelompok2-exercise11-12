import { useState } from "react";
import {
  ChakraProvider,
  Heading,
  FormLabel,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormErrorMessage,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import formFloating from "../../themes/formFloating";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name must be 4 characters minimum")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()

    .matches(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$",
      `Password must be 6 characters minimum, at least contain one lowercase,
         one uppercase, one number, and one symbol`
    )
    .required("Password is required"),
});

const BoxRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const register = async (name, email, password) => {
    try {
      await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      alert("Register Success");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      register(values.name, values.email, values.password);
      navigate("/login");
    },
  });

  return (
    <ChakraProvider theme={formFloating}>
      <form onSubmit={formik.handleSubmit}>
      <Stack
        align="center"
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="md"
        width="full"
      >
        <Heading mb={3} size="lg" fontWeight="bold">
          Create your account
        </Heading>
          <Heading as="h2"></Heading>
          <Stack spacing={5} w="full">
            <FormControl
              variant="floating"
              isInvalid={formik.touched.name && formik.errors.name}
            >
              <InputGroup>
                <Input
                  placeholder=" "
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                ></Input>
                <FormLabel>Name</FormLabel>
              </InputGroup>
              {formik.touched.name && formik.errors.name && (
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              variant="floating"
              isInvalid={formik.touched.email && formik.errors.email}
            >
              <InputGroup>
                <Input
                  placeholder=" "
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                ></Input>
                <FormLabel>Email</FormLabel>
              </InputGroup>
              {formik.touched.email && formik.errors.email && (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              variant="floating"
              isInvalid={formik.touched.password && formik.errors.password}
            >
              <InputGroup>
                <Input
                  placeholder=" "
                  type={showPassword ? "text" : "password"}
                  name="password"
                  values={formik.values.password}
                  onChange={formik.handleChange}
                ></Input>
                <InputRightElement>
                  <Button
                    h="90%"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
                <FormLabel>Password</FormLabel>
              </InputGroup>
              {formik.touched.password && formik.errors.password && (
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              type="submit"
              colorScheme="twitter"
              borderRadius="5em"
              w="100%"
            >
              Sign Up
            </Button>
          </Stack>
      </Stack>
        </form>
    </ChakraProvider>
  );
};

export default BoxRegister;
