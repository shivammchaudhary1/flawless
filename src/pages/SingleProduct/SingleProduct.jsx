import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import Alert from "./Alert";
import axios from "axios";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getData = () => {
    axios
      .get(`https://flawless-backend.onrender.com/eye?id=${id}`)
      .then((res) => {
        // console.log(res.data[0]);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log({ error: err });
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);

    //post method
  }, []);

  //post

  const { product_image, product_name, product_price } = data;

  return loading ? (
    <Heading
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
    >
      ...Loading
    </Heading>
  ) : error ? (
    <Heading
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
    >
      ...Something Went Wrong
    </Heading>
  ) : (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product_image}
            fit={"contain"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product_name}
            </Heading>
            <Text color="#FC2779" fontWeight={500} fontSize={"2xl"}>
              ₹ {product_price} Indian Rupee
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor="#FC2779" />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color="#7B899D" fontSize={"2xl"} fontWeight={"300"}>
                Are you ready to enhance your natural beauty and embrace a
                radiant, confident you?
              </Text>
              <Text fontSize={"lg"}>
                Unlock your natural beauty potential with{" "}
                <span>{`${product_name}`}</span>. Embrace the confidence that
                comes from having skin that looks and feels its best. Start your
                journey towards radiant and healthy skin today.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color="#D7A032"
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Skin Nourishment</ListItem>
                  <ListItem>Anti-Aging</ListItem>{" "}
                  <ListItem>Sun Protection</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Color Enhancement</ListItem>
                  <ListItem>Moisturization</ListItem>
                  <ListItem>Long-Lasting Effects</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          {/* <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            borderRadius={"10px"}
            bg="#FC2779"
            color="#fff"
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            // onClick={handleBuy}
          >
            Buy Now
          </Button> */}
          <Alert data={data} />
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default SingleProduct;
