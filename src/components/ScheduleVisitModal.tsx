import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
} from "@chakra-ui/react";
import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import { mockedDoctors } from "../mocks";
import "../styles/date-picker.css";
import { Doctor } from "../types";

export interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSchedule: (data: VisitFormData) => void;
  finalRef?: React.RefObject<HTMLElement>;
}

export interface VisitFormData {
  date: string;
  time: string;
  doctor: string;
}

export function ScheduleVisitModal({
  isOpen,
  onClose,
  onSchedule,
  finalRef,
}: ScheduleVisitModalProps) {
  const [date, setDate] = React.useState<string>(new Date().toLocaleDateString());
  const [time, setTime] = React.useState<string>("12:00");
  const [doctor, setDoctor] = React.useState<string>(mockedDoctors[0].id);

  return (
    <Modal size="xl" finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Umów wizytę</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction={"row"}>
            <FormControl>
              <FormLabel>Data wizyty</FormLabel>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Godzina wizyty</FormLabel>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel>Wybierz lekarza</FormLabel>
            <Select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
              {mockedDoctors.map((doctor: Doctor) => (
                <option value={doctor.id}>{doctor.name}</option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => onSchedule({
            date,
            time,
            doctor,
          })}>
            Umów
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Anuluj
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
