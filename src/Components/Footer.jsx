import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <Box
        bg={useColorModeValue("#8C8D94")}
        color={useColorModeValue("#FEFBF8")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            <Stack align={"flex-start"}>
              <ListHeader>Nykaa</ListHeader>
              <Link href={"#"}>Who are we?</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Authenticity</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Testimonials</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Help</ListHeader>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Frequently asked questions</Link>
              <Link href={"#"}>Store Locator</Link>
              <Link href={"#"}>Cancellation & Return</Link>
              <Link href={"#"}>Shipping & Delivery</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Inspire Me</ListHeader>
              <Link href={"#"}>Beauty Book</Link>
              <Link href={"#"}>Nykaa TV</Link>
              <Link href={"#"}>Nykaa Network</Link>
              <Link href={"#"}>Buying Guides</Link>
              <Link href={"#"}>Sell on Nykaa</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Quick Links</ListHeader>
              <Link href={"#"}>Offer Zone</Link>
              <Link href={"#"}>New Launches</Link>
              <Link href={"#"}>Legal</Link>
              <Link href={"#"}>Nykaa Fashion</Link>
              <Link href={"#"}>Nykaa Pro</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Top Categories</ListHeader>
              <Link href={"#"}>Makeup</Link>
              <Link href={"#"}>Skin</Link>
              <Link href={"#"}>Hair</Link>
              <Link href={"#"}>Bath & Body</Link>
              <Link href={"#"}>Mom & Baby</Link>
              <Link href={"#"}>Fragrances</Link>
              <Link href={"#"}>Luxe</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Image src="https://i.ibb.co/bbGCW7F/bottom-copy.png" alt="name" />
    </>
  );
}
