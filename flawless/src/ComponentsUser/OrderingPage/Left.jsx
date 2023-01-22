import axios from "axios";
import { useState, useEffect } from "react";
import {
  Box,
  Image,
  Badge,
  SimpleGrid,
  Grid,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

const getData = (page) => {
  return axios.get(`http://localhost:8080/eye?_page=${page}&_limit=10`);
};

const Left = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getData(page)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [page]);
  console.log(data);

  return loading ? (
    <h1>...Loding</h1>
  ) : error ? (
    <h1>Something Went Wrong</h1>
  ) : (
    <>
      {/* Card  */}

      <Box w="80%" m="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.map((property) => (
            // <p>{e.product_giftcard}</p>

            <Box
              align={"center"}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box _hover={{ boxSize: "200px" }}>
                <Image
                  src={property.product_image}
                  alt={property.product_name}
                />
              </Box>

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    {property.product_off}
                  </Badge>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h3"
                  lineHeight="tight"
                  noOfLines={3}
                  align={"left"}
                >
                  {property.product_name}
                </Box>

                <Box>
                  <Box
                    as="span"
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    MRP : {property.product_price}
                  </Box>
                  <Text textDecoration={"line-through"} color={"gray.600"}>
                    {property.product_mrp}
                  </Text>
                </Box>
                <Box fontSize="sm" color="#FD7091">
                  {property.product_giftcard}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        align={"center"}
                        key={i}
                        color={i < property.rating ? "teal.500" : "gray.300"}
                      />
                    ))}
                  <Box
                    as="span"
                    ml="2"
                    color="gray.600"
                    fontSize="sm"
                    align={"center"}
                  >
                    {property.product_rating} reviews
                  </Box>
                  <Button
                    bg="#EA3891"
                    color="#FFFFFF"
                    _hover={{ bg: "#CE0A6C" }}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Pagination  */}

      <Box>
        <Flex
          bg="#edf3f8"
          _dark={{ bg: "#3e3e3e" }}
          p={50}
          alignItems="center"
          justifyContent="center"
          w="full"
        >
          <Flex>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => setPage(page - 1)}
              isDisabled={page === 1}
            >
              Previous
            </Button>
            <Button colorScheme="teal" variant="solid">
              {page}
            </Button>

            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Left;
