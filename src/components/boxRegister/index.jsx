import { FormLabel, FormControl, InputGroup, Input, Button, FormErrorMessage } from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, "Name must be 4 characters minimum")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        // .min(6, "Password must be 6 characters minimum")
        .matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$", 
        `Password must be 6 characters minimum, at least contain one lowercase,
         one uppercase, one number, and one symbol`)
        .required("Password is required")
});

const BoxRegister = () => {

    const register = async(name, email, password) => {
        try {
            await axios.post("http://localhost:3000/users", {
                name,
                email,
                password,
            });
            alert("Register Success");
        } catch (err) {
            console.log(err)
        }
    }

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },

        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            register(values.name, values.email, values.password);
            navigate("/login")
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <FormLabel>Name :</FormLabel>
                <FormControl
                    isInvalid={formik.touched.name && formik.errors.name}>
                    <InputGroup>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Insert your name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        ></Input>
                    </InputGroup>
                    {formik.touched.name && formik.errors.name && (
                        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    )}
                </FormControl>
                <FormLabel>Email :</FormLabel>
                <FormControl
                    isInvalid={formik.touched.email && formik.errors.email}>
                    <InputGroup>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Insert your email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        ></Input>
                    </InputGroup>
                    {formik.touched.email && formik.errors.email && (
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    )}
                </FormControl>
                <FormLabel>Password :</FormLabel>
                <FormControl
                    isInvalid={formik.touched.password && formik.errors.password}>
                    <InputGroup>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Insert your password"
                            values={formik.values.password}
                            onChange={formik.handleChange}
                        ></Input>
                    </InputGroup>
                    {formik.touched.password && formik.errors.password && (
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    )}
                </FormControl>
                {/* <Link to="Login"> */}
                <Button type="submit" colorScheme="facebook">Signup</Button>
                {/* </Link> */}
            </form>
        </>
    )
}

export default BoxRegister;