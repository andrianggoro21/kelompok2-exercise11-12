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
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from "formik";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email address format')
  .required('Email is required'),
  password: Yup.string()
  .required('Password is required'),
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
  const allPassword = users.map((item) => item.password);
  useEffect(() => {
    fatchDataLogin();
  }, []);

    
  const check = (email, password) => {
    if (allEmail.includes(email) && allPassword.includes(password)) {
      alert('succes')
   
     
    } else if (
      allEmail.includes(email) &&
      !allPassword.includes(password)
    ) {
      alert("Password salah");
    } else {
      alert("Email Belum Terdaftar");
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
      Navigate("/");
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
        {/* {authenticated ? ( */}
          {/* <Flex flexDirection="column" alignItems="center">
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
        ) : ( */}
          <div>
            <Heading mb={4} size="lg" fontWeight="bold">
              Login
            </Heading>
            <form onSubmit={formik.handleSubmit}>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="text"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {/* <ErrorMessage name="username" component="div" className="error-message" style={{ color: "red" }}/> */}
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
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
                    {/* <ErrorMessage name="password" component="div" className="error-message" /> */}
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
          </div>
      </Box>
    </Flex>
    // <Box>
		// 	<Box
		// 		bgColor="white"
		// 		p="50px"
		// 		borderRadius="10px"
		// 		color="black"
    //             w="200px"
		// 	>
		// 		<form onSubmit={formik.handleSubmit}>
		// 			<Text fontSize="20px">Login</Text>
		// 			<FormControl display="flex" flexDirection="column" justifyContent="start">
		// 				<FormLabel>Email</FormLabel>
		// 				<Input
		// 					type="text"
    //                         name="email"
		// 					value={formik.values.email}
		// 					onChange={formik.handleChange}
    //                         borderRadius="5px"
    //                         bgColor="transparent"
    //                         border="1px solid black"
    //                         h="25px"
    //                         color="black"
		// 				/>
		// 			</FormControl>
		// 			<FormControl display="flex" flexDirection="column" justifyContent="start">
		// 				<FormLabel>Password</FormLabel>
		// 				<Input
		// 					type="password"
    //                         name="password"
		// 					value={formik.values.password}
		// 					onChange={formik.handleChange}
    //                         borderRadius="5px"
    //                         bgColor="transparent"
    //                         border="1px solid black"
    //                         h="25px"
    //                         color="black"
		// 				/>
		// 			</FormControl>
		// 			<Button type="submit" mt="30px" p="6px 20px" textAlign="center" fontSize="16px">Login</Button>
		// 		</form>
		// 		<Box>
		// 			<Text>Belum punya akun <Link to="/register">Register</Link></Text>
		// 		</Box>
		// 	</Box>
		// </Box>
  );
};

export default BoxLogin;
