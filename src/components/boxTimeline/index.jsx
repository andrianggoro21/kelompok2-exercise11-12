import { useEffect, useState } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Twitter from "../../images/twitter-logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
// import * as Yup from "yup";

const BoxTimeline = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");

  const Navigate = useNavigate();
  const email = localStorage.getItem("token");

  const inputTimeline = async (email, posting) => {
    try {
      await axios.post("http://localhost:8000/users", {
        email,
        posting,
      });
      alert("Input Success");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      posting: "",
    },

    onSubmit: (values) => {
      inputTimeline(email, values.posting);
      formik.values.posting = "";
    },
  });

  const [tweet, setTweet] = useState([]);
  const newTweet = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      setTweet(response.data);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newTweet();
  }, [tweet]);

  const logout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };

  const [data, setData] = useState([]);
 
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
      // newData(response.data);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const newData = data.filter((input) => input.email !== email);
  // setData(newList);

  return (
    <>
      <Box
        maxW="100vw"
        minH="100vh"
        display="flex"
        sx={{ justifyContent: { lg: "center", xl: "center", "2xl": "center" } }}
      >
        <Box display="flex" w="75em" h="100vh" justifyContent="center">
          {/* sidebar dan bottom navbar */}
          {isSmallerThan768 ? (
            <Box
              w="100%"
              h="75px"
              backgroundColor="#ffffff"
              position="fixed"
              bottom="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Box fontSize="40px" display="flex" gap="60px">
                <ion-icon name="home-outline"></ion-icon>
                <ion-icon name="notifications-outline"></ion-icon>
                <Link to="/display-data">
                  <ion-icon name="people-outline"></ion-icon>
                </Link>
                <ion-icon name="person-circle-outline"></ion-icon>
              </Box>
            </Box>
          ) : isSmallerThan1280 ? (
            <Box
              w="5em"
              minH="100vh"
              backgroundColor="#ffffff"
              float="left"
              display="flex"
              justifyContent="center"
              overflow="hidden"
              padding="1em"
            >
              <Box
                fontSize="30px"
                display="flex"
                flexDirection="column"
                gap="40px"
              >
                <Box display="flex" alignItems="center" gap="20px">
                  <Image src={Twitter} />
                </Box>
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="home-outline"></ion-icon>
                </Box>
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="search-outline"></ion-icon>
                </Box>
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="notifications-outline"></ion-icon>
                </Box>
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="mail-outline"></ion-icon>
                </Box>
                <Link to="/display-data">
                  <Box display="flex" alignItems="center" gap="20px">
                    <ion-icon name="people-outline"></ion-icon>
                  </Box>
                </Link>

                <Box
                  display="flex"
                  alignItems="center"
                  gap="20px"
                  backgroundColor="#eeeeee"
                  borderRadius="20px"
                >
                  <ion-icon name="person-circle-outline"></ion-icon>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              w="18.7em"
              minH="100vh"
              backgroundColor="#ffffff"
              float="left"
              display="flex"
              justifyContent="center"
              overflow="hidden"
              padding="1em"
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="40px"
                fontSize="28px"
              >
                <Box display="flex" alignItems="center" gap="20px">
                  <Image src={Twitter} />
                </Box>
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="home-outline"></ion-icon>
                  <Text fontSize="22px" fontWeight="600" color="#000000">
                    Home
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="search-outline"></ion-icon>
                  <Text fontSize="22px" fontWeight="600" color="#000000">
                    Explore
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="notifications-outline"></ion-icon>
                  <Text fontSize="22px" fontWeight="600" color="#000000">
                    Notifications
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="mail-outline"></ion-icon>
                  <Text fontSize="22px" fontWeight="600" color="#000000">
                    Messages
                  </Text>
                </Box>
                <Link to="/display-data">
                  <Box display="flex" alignItems="center" gap="20px">
                    <ion-icon name="people-outline"></ion-icon>
                    <Text fontSize="22px" fontWeight="600" color="#000000">
                      Data Users
                    </Text>
                  </Box>
                </Link>
                <Box
                  display="flex"
                  alignItems="center"
                  gap="10px"
                  backgroundColor="#eeeeee"
                  padding=".3em"
                  borderRadius="20px"
                >
                  <ion-icon name="person-circle-outline"></ion-icon>
                  <Text fontSize="18px" fontWeight="600" color="#000000">
                    {email}
                  </Text>
                </Box>
                <Button type="submit" onClick={logout}>
                  Logout
                </Button>
                {/* <Box display="flex" flexDirection="column">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </Box> */}
              </Box>
            </Box>
          )}
          <Box
            w="45em"
            display="flex"
            flexDirection="column"
            borderLeft="1px solid #eeeeee"
            borderRight="1px solid #eeeeee"
          >
            <Box
              h="60px"
              backgroundColor="#ffffff"
              padding=".5em"
              borderBottom="1px solid #eeeeee"
            >
              <Text fontSize="22px" fontWeight="600" color="#000000">
                Home
              </Text>
            </Box>
            <Box
              h="60px"
              backgroundColor="#ffffff"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              borderBottom="1px solid #eeeeee"
            >
              <Box fontSize="18px" fontWeight="500" color="#000000">
                <Text>For You</Text>
              </Box>
              <Box fontSize="18px" fontWeight="500" color="#000000">
                <Text>Following</Text>
              </Box>
            </Box>
            <Box
              h="120px"
              backgroundColor="#ffffff"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              borderBottom="1px solid #eeeeee"
            >
              <form onSubmit={formik.handleSubmit}>
                <Box w="35em" display="flex" alignItems="flex-end" gap="1em">
                  <Input
                    placeholder="What is happening?!"
                    type="text"
                    name="posting"
                    value={formik.values.posting}
                    onChange={formik.handleChange}
                  ></Input>
                  <Button
                    type="submit"
                    backgroundColor="#1DA1F2"
                    color="#ffffff"
                  >
                    Post
                  </Button>
                </Box>
              </form>
            </Box>
            <Box
              display="flex"
              // padding="1em"
              minH="75vh"
            >
              <UnorderedList margin="0" w="100%">
                {tweet.length > 0 &&
                  tweet.map((item, index) => {
                    return (
                      <Box
                        display="flex"
                        borderBottom="1px solid #eeeeee"
                        padding=".5em"
                      >
                        <Box fontSize="30px">
                          <ion-icon name="person-circle-outline"></ion-icon>
                        </Box>
                        <Box
                          display="flex"
                          flexDirection="column"
                          paddingLeft="1em"
                        >
                          <Text
                            fontSize="18px"
                            fontWeight="500"
                            color="#000000"
                            key={index}
                          >
                            {item.email}
                          </Text>
                          <ListItem listStyleType="none" key={index}>
                            {item.posting}
                          </ListItem>
                        </Box>
                      </Box>
                    );
                  })}
              </UnorderedList>
            </Box>
          </Box>
          {isSmallerThan768 ? (
            ""
          ) : isSmallerThan1280 ? (
            ""
          ) : (
            <Box
              w="18.7em"
              minH="100vh"
              backgroundColor="#ffffff"
              float="left"
              display="flex"
              justifyContent="center"
              padding="1em"
            >
              <Box
                fontSize="30px"
                display="flex"
                flexDirection="column"
                gap="40px"
              >
                <Box
                  h="50px"
                  display="flex"
                  alignItems="center"
                  fontSize="22px"
                  gap="10px"
                  border="2px solid #ffffff"
                  borderRadius="20px"
                  padding=".5em"
                  backgroundColor="#eeeeee"
                >
                  <ion-icon name="search-outline"></ion-icon>
                  <Input variant="unstyled" w="180px" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="10px"
                  backgroundColor="#eeeeee"
                  padding=".5em"
                  borderRadius="10px"
                >
                  <Text fontSize="22px" fontWeight="600" color="#000000">
                    Who to follow
                  </Text>

                  {newData.map((entry, index) => (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      backgroundColor="#ffffff"
                      borderRadius="10px"
                      padding=".2em"
                      fontSize="18px"
                    >
                      <ion-icon name="person-circle-outline"></ion-icon>
                      <Box
                        w="85%"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Text key={index}>{entry.email}</Text>
                        <ion-icon name="add-outline"></ion-icon>
                      </Box>
                    </Box>
                  ))}

                  {/* <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    backgroundColor="#ffffff"
                    borderRadius="10px"
                    padding=".2em"
                    fontSize="22px"
                  >
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <Box
                      w="75%"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text>Putu</Text>
                      <ion-icon name="add-outline"></ion-icon>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    backgroundColor="#ffffff"
                    borderRadius="10px"
                    padding=".2em"
                    fontSize="22px"
                  >
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <Box
                      w="75%"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text>Hihi</Text>
                      <ion-icon name="add-outline"></ion-icon>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    backgroundColor="#ffffff"
                    borderRadius="10px"
                    padding=".2em"
                    fontSize="22px"
                  >
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <Box
                      w="75%"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text>Asrar</Text>
                      <ion-icon name="add-outline"></ion-icon>
                    </Box>
                  </Box> */}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export default BoxTimeline;
