import { useEffect, useState } from "react";
import axios from "axios";
import {
  Stack,
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

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
    <Stack gap="1em" minH="100vh" align="center" justify="center">
      <Heading>List Users</Heading>
      <Box rounded="lg" boxShadow={"lg"} p={6} w="90%">
        <TableContainer>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Passowrd</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((item, index) => {
                  return (
                    <Tr key="index">
                      <Td>{index + 1}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.password}</Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default BoxDisplay;
