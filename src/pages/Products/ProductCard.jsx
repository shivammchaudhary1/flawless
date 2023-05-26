import React from "react";
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
import SingleProduct from "../SingleProduct/SingleProduct";

// name={e.product_name}
// image={e.product_image}
// off={e.product_off}
// price={e.product_price}
// mrp={e.product_mrp}
// giftcard={e.product_giftcard}
// rating={e.rating}

const ProductCard = ({
  name,
  image,
  off,
  price,
  mrp,
  giftcard,
  rating,
  id,
}) => {
  const handleProductId = (id) => {
    // <SingleProduct id={id} />;
    console.log(id);
  };

  return (
    <Box
      key={id}
      align={"center"}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={() => handleProductId(id)}
    >
      <Box _hover={{ boxSize: "200px" }}>
        <Image src={image} alt={name} />
      </Box>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {off}
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
          {name}
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm" fontWeight="semibold">
            MRP : ₹ {price}
          </Box>
          <Text textDecoration={"line-through"} color={"gray.600"}>
            ₹ {mrp}
          </Text>
        </Box>
        <Box fontSize="sm" color="#FD7091">
          {giftcard}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                align={"center"}
                key={i}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm" align={"center"}>
            {rating} reviews
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
  );
};

export default ProductCard;
