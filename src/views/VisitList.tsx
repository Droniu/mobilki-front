import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Avatar,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaCalendarMinus } from "react-icons/fa";
import Header from "../components/Header";
import { mockedVisits } from "../mocks";
import { Visit } from "../types";
import "./tableStyles.css"

export default function VisitList() {
  return (
    <>
      <Header />
      <Box overflowX={"auto"} display="flex" justifyContent={"center"}>
        <TableContainer>
          <Table variant="simple" width={"100vh"} h={"100%"}>
            <Thead>
              <Tr>
                <Th width={"2rem"} />
                <Th>Lekarz</Th>
                <Th>Miejsce</Th>
                <Th isNumeric>Termin</Th>
                <Th justifyContent={"center"} display="flex">Odwołaj wizytę</Th>
              </Tr>
            </Thead>
            <Tbody>
              {mockedVisits.map((visit: Visit) => {
                return (
                  <Tr key={visit.id}>
                    <Td>
                      <Avatar src={visit.doctor.thumbnail} />
                    </Td>
                    <Td>{visit.doctor.name}</Td>
                    <Td>{visit.place}</Td>
                    <Td isNumeric>{visit.datetime}</Td>
                    <Td justifyContent={"center"} display="flex">
                      <Button colorScheme="red">
                        <FaCalendarMinus />
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
