import axios from "axios";
import { useState, useEffect } from "react";
import {
  Box,
  Image,
  Grid,
  Button,
  Flex,
  Text,
  Center,
  Input,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import ProductsCarousal from "./ProductsCarousal";
import ProductCard from "./ProductCard";



const getData = (params = { page: 1, limit: 10, sort: "", searchTerm: "" }) => {
  return axios.get(`https://flawless-backend.onrender.com/eye`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: "product_price",
      _order: params.sort,
      q: params.searchTerm,
    },
  });
};

const ProductFunctionality = () => {
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
      searchTerm: searchTerm,
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
  // console.log(data);

  // sorting function

  const handleSortHTL = () => {
    setSort("desc");
  };
  const handleSortLTH = () => {
    setSort("asc");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm);
  };

  const handleClick = () => {
    setLoading(true);
    setPage(1); // Reset the page to 1 when performing a new search

    getData({
      page: 1, // Set the page to 1 when performing a new search
      limit: 12,
      sort: sort,
      searchTerm: searchTerm,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  };

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

      {/* Card  */}
      {/* Card  */}
      {/* Card  */}
      {/* Card  */}
      {/* Card  */}
      {/* Card  */}

      {/* <ProductCard /> */}

      <Box w="80%" m="auto" cursor="pointer">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {data.map((property) => {
            return (
              <>
                <ProductCard
                  product_name={property.product_name}
                  product_image={property.product_image}
                  product_off={property.product_off}
                  product_price={property.product_price}
                  product_mrp={property.product_mrp}
                  product_giftcard={property.product_giftcard}
                  rating={property.rating}
                  id={property.id}
                  product_rating={property.product_rating}
                />
              </>
            );
          })}
        </Grid>
      </Box>

      {/* Card  */}
      {/* Card  */}
      {/* Card  */}
      {/* Card  */}
      {/* Card  */}
      {/* Card  */}
      {/* Card  */}
      {/* Card  */}
      {/* Card  */}

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

export default ProductFunctionality;
