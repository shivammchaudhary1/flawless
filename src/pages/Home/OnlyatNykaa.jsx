import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Image, Grid, Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const getData = () => {
  return axios.get(`http://localhost:8080/onlyatnykaa`);
};

const OnlyatNykaa = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Box p={5}>
        <Text fontSize={25} textAlign={["left", "center"]} fontWeight="bold">
          Only at Nykaa
        </Text>
      </Box>

      <Center>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {data.map((item) => {
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={item.id}
              >
                <Image
                  src={item.brand_image}
                  alt={item.brand_product_description}
                />

                <Box p="6">
                  <Box
                    mt="1"
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    color="#E80071"
                  >
                    {item.brand_product_name}
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {item.brand_product_description}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Center>
    </>
  );
};

export default OnlyatNykaa;
