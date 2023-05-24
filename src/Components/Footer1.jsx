import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";

export default function Footer1() {
  return (
    <>
      <Box
        bg={useColorModeValue("#3F414D")}
        color={useColorModeValue("#FFFFFF")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
            spacing={8}
          >
            <Stack align={"flex-start"}>
              <Text>Get special discount on your inbox</Text>
              <Stack direction={"row"}>
                <Input
                  placeholder={"Your email address"}
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
                <IconButton
                  bg={useColorModeValue("#FF91BB")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "pink.600",
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
