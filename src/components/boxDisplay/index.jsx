import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";

const BoxDisplay = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <Box>
              <Box>{item.name}</Box>
              <Box>{item.email}</Box>
              <Box>{item.password}</Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default BoxDisplay;
