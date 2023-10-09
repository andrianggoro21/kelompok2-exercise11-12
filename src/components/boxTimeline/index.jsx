import { Box, Text, Textarea, Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Twitter from "../../images/twitter-logo.png";

const BoxTimeline = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");
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
                <ion-icon name="people-outline"></ion-icon>
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
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="people-outline"></ion-icon>
                </Box>
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
                <Box display="flex" alignItems="center" gap="20px">
                  <ion-icon name="people-outline"></ion-icon>
                  <Text fontSize="22px" fontWeight="600" color="#000000">
                    Data Users
                  </Text>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  gap="20px"
                  backgroundColor="#eeeeee"
                  padding=".3em"
                  borderRadius="20px"
                >
                  <ion-icon name="person-circle-outline"></ion-icon>
                  <Text fontSize="18px" fontWeight="600" color="#000000">
                    kelompok 2
                  </Text>
                </Box>
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
              <form>
                <Box w="35em" display="flex" alignItems="flex-end" gap="1em">
                  <Textarea></Textarea>
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
            <Box backgroundColor="#ffffff" minH="75vh"></Box>
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
                <Box display="flex" alignItems="center" gap="20px">
                  <Text>Who to follow</Text>
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
