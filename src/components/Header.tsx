import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaPlus, FaClinicMedical } from "react-icons/fa";

export interface HeaderProps {
  onSchedule: () => void;
}

export default function withAction({onSchedule}: HeaderProps) {
  return (
    <>
      <Box bg={"gray.200"} px={4} w={"100%"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <FaClinicMedical size={"2rem"} />
          <b>Przychodnia specjalistyczna</b>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"blue"}
              size={"sm"}
              mr={4}
              leftIcon={<FaPlus />}
              onClick={onSchedule}
            >
              Umów wizytę
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Wyloguj się</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      <Box p={4} />
    </>
  );
}
