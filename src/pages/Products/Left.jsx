import axios from "axios";
import { useState, useEffect } from "react";
import {
  Box,
  Image,
  Badge,
  Grid,
  Button,
  Flex,
  Text,
  Center,
  Input,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import ProductsCarousal from "./ProductsCarousal";

const getData = (params = { page: 1, limit: 10, sort: "" }) => {
  // return axios.get(`http://localhost:8080/eye?_page=${page}&_limit=12`);
  return axios.get(`http://localhost:8080/eye`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: "product_price",
      _order: params.sort,
    },
  });
};

const Left = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    getData({
      page: page,
      limit: 12,
      sort: sort,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [page, sort]);

  // sorting function

  const handleSortHTL = () => {
    setSort("desc");
  };
  const handleSortLTH = () => {
    setSort("asc");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {};

  return loading ? (
    <h1>...Loding</h1>
  ) : error ? (
    <h1>Something Went Wrong</h1>
  ) : (
    <Box w="90%" m="auto">
      <ProductsCarousal />

      <Box p="10px" mb="10px">
        <Center>
          <Text fontSize="25px" fontWeight="semibold">
            Eye Makeup Products
          </Text>
        </Center>
      </Box>
      <Box w="80%" m="auto" mb="20px">
        <Image src="https://i.ibb.co/wzDw2Tp/nykaa-image.png" alt="error" />
      </Box>
      <Box>
        <Center p={25}>
          <Text fontSize="25px" fontWeight="semibold">
            All Products
          </Text>
        </Center>
      </Box>
      {/* Sorting button  */}
      <Box>
        <Flex
          // bg="#edf3f8"
          _dark={{ bg: "#3e3e3e" }}
          p={5}
          alignItems="center"
          justifyContent="flex-end"
          w="80%"
          gap="20px"
          m="auto"
        >
          <Flex>
            <Button
              ml="5px"
              mr="5px"
              colorScheme="teal"
              variant="outline"
              onClick={handleSortHTL}
            >
              Price: High to Low
            </Button>
            <Button
              ml="5px"
              mr="5px"
              colorScheme="teal"
              variant="outline"
              onClick={handleSortLTH}
            >
              Price: Low to High
            </Button>
          </Flex>

          <Input
            placeholder="Search Product"
            type="text"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button onClick={handleClick}>Search</Button>
        </Flex>
      </Box>

      {/* Card  */}

      <Box w="80%" m="auto">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {data.map((property) => (
            // <p>{e.product_giftcard}</p>

            <Box
              key={property.product_name}
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
                    ml="5px"
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
    </Box>
  );
};

export default Left;
