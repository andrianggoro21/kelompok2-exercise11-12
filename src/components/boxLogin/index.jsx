import { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Heading,
  Button,
  Avatar,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email address format')
  .required('Email is required'),
  password: Yup.string()
  .required('Password is required'),
});

const BoxLogin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
    
    const handleLogin = (values) => {
    const { username, password } = values;

    const isValidUser = users.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {

      setAuthenticated(true);
      alert('Login successful!');
    } else {
      // Autentikasi gagal
      alert('Login failed. Please check your username and password.');
    }
  };

  const handleLogout = () => {
    // Logout pengguna
    setAuthenticated(false);
  };

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
        {authenticated ? (
          <Flex flexDirection="column" alignItems="center">
            <Avatar
              size="xl"
              name="User"
              src="https://via.placeholder.com/150"
              mb={4}
            />
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Welcome 😊, User!
            </Text>
            <Button
              onClick={handleLogout}
              colorScheme="twitter"
              mt={4}
              size="md"
            >
              Logout
            </Button>
          </Flex>
        ) : (
          <div>
            <Heading mb={4} size="lg" fontWeight="bold">
              Login
            </Heading>
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={(values) => handleLogin(values)}
            >
              {({ values, handleChange }) => (
                <Form>
                  <FormControl>
                    <FormLabel>Username or Email</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="username" component="div" className="error-message" style={{ color: "red" }}/>
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
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
                    <ErrorMessage name="password" component="div" className="error-message" />
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
                </Form>
              )}
            </Formik>
          </div>
        )}
      </Box>
    </Flex>
  );
};

export default BoxLogin;
