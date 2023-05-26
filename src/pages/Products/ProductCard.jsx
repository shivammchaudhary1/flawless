import React from "react";
import { Box, Image, Badge, Button, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";



const ProductCard = ({
  name,
  image,
  off,
  price,
  mrp,
  giftcard,
  rating,
  id,
  review,
}) => {
  return (
    <RouterLink to={`/product/${id}`}>
      <Box
        key={id}
        align={"center"}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
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
            <Box
              as="span"
              ml="2"
              color="gray.600"
              fontSize="sm"
              align={"center"}
            >
              {review} reviews
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
    </RouterLink>
  );
};

export default ProductCard;
