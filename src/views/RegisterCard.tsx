import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Zarejestruj się
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            aby umówić u nas wizytę ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Imię</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Nazwisko</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Adres e-mail</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="pesel" isRequired>
              <FormLabel>PESEL</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Adres</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="telephone_number" isRequired>
              <FormLabel>Numer telefonu</FormLabel>
              <Input type="tel" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Hasło</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement>
                  <Button
                    variant={"ghost"}
                    padding={0}
                    border={"none"}
                    _focus={{ outline: "none" }}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <BsEyeFill size={"16px"} />
                    ) : (
                      <BsEyeSlashFill />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="gender">
              <FormLabel>Płeć</FormLabel>
              <Select>
                  <option value=""></option>
                  <option value="male">Mężczyzna</option>
                  <option value="female">Kobieta</option>
                  <option value="other">Inna</option>
              </Select>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Wysyłanie"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Zarejestruj się
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Posiadasz już konto?{" "}
                <Link color={"blue.400"} href={"/login"}>
                  Zaloguj się
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
