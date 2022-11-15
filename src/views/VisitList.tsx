import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaCalendarMinus } from "react-icons/fa";
import Header from "../components/Header";
import { ScheduleVisitModal, VisitFormData } from "../components/ScheduleVisitModal";
import { mockedDoctors, mockedVisits } from "../mocks";
import { Visit } from "../types";
import { getRandomInt } from "../utils/utils";

export default function VisitList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [visits, setVisits] = React.useState<Visit[]>(mockedVisits);

  const handleVisitCancel = (visitId: string) =>
    setVisits(visits.filter((visit: Visit) => visit.id !== visitId));

  const handleVisitAdd = (visitData: VisitFormData) => {
    console.log(visitData);
    const newVisit: Visit = {
      id: Math.random().toString(36).substring(2, 9),
      datetime: visitData.date.concat(" ", visitData.time),
      doctor: mockedDoctors.find((doctor) => doctor.id === visitData.doctor)!,
      place: "Gabinet ".concat(getRandomInt(1, 10).toString()),
    };
    setVisits([...visits, newVisit]);
    onClose();
  };

  return (
    <>
      <Header onSchedule={onOpen} />
      <Box overflowX={"auto"} display="flex" justifyContent={"center"}>
        {visits.length ? (
          <TableContainer>
            <Table variant="simple" width={"100vh"} h={"100%"}>
              <Thead>
                <Tr>
                  <Th width={"2rem"} />
                  <Th>Lekarz</Th>
                  <Th>Miejsce</Th>
                  <Th isNumeric>Termin</Th>
                  <Th justifyContent={"center"} display="flex">
                    Odwołaj wizytę
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {visits.map((visit: Visit) => {
                  return (
                    <Tr key={visit.id}>
                      <Td>
                        <Avatar src={visit.doctor.thumbnail} />
                      </Td>
                      <Td>{visit.doctor.name}</Td>
                      <Td>{visit.place}</Td>
                      <Td isNumeric>{visit.datetime}</Td>
                      <Td justifyContent={"center"} display="flex">
                        <Button
                          colorScheme="red"
                          onClick={() => handleVisitCancel(visit.id)}
                        >
                          <FaCalendarMinus />
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <p>Brak wizyt</p>
        )}
      </Box>
      <ScheduleVisitModal
        isOpen={isOpen}
        onClose={onClose}
        onSchedule={(data: VisitFormData) => handleVisitAdd(data)}
      />
    </>
  );
}
