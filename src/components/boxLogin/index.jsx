import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  Stack,
  Avatar,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  FormErrorMessage
} from "@chakra-ui/react";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
  .required("Password is required"),
});

const BoxLogin = () => {
  const [users, setUsers] = useState([]);
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const fatchDataLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const allEmail = users.map((item) => item.email);
  
  useEffect(() => {
    fatchDataLogin();
  }, []);

  const email = (email) => {
    localStorage.setItem("token", email);
  };

  const check = (email, password) => {
    if (allEmail.includes(email)) {
      const newEmail = users[allEmail.indexOf(email)];
      if (newEmail.password.includes(password)) {
        localStorage.setItem("akun", allEmail.indexOf(email));
        alert("succes");
        Navigate("/");
      } else  {
        alert("Password salah");
      }
    } else {
      alert("Email Belum Terdaftar");
      Navigate("/register");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      check(values.email, values.password);
      email(values.email);
    },
  });


  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="twitter.100"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="md"
        maxWidth="400px"
        width="100%"
      >
        <Stack>
          <Heading mb={4} size="lg" fontWeight="bold">
            Login
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel>Email :</FormLabel>
              <Input
              id="email"
              placeholder="Enter your email"
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password :</FormLabel>
              <InputGroup>
                <Input
                id="password"
                placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              colorScheme="twitter"
              bg="twitter.400"
              mt={4}
              size="lg"
              w="100%"
            >
              Login
            </Button>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default BoxLogin;
