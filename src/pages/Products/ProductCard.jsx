import React from "react";
import { Box, Image, Badge, Button, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

// product_name={property.product_name}
// product_image={property.product_image}
// product_off={property.product_off}
// product_price={property.product_price}
// product_mrp={property.product_mrp}
// product_giftcard={property.product_giftcard}
// rating={property.rating}
// id={property.id}
// product_rating={property.product_rating}

const ProductCard = ({
  product_name,
  product_image,
  product_off,
  product_price,
  product_mrp,
  product_giftcard,
  rating,
  id,
  review,
}) => {
  const handleAddToCart = () => {
    axios
      .post("https://flawless-backend.onrender.com/buy", {
        product_name,
        product_image,
        product_off,
        product_price,
        product_mrp,
        product_giftcard,
        rating,
        id,
      })
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.log({ error: error.message });
      });
  };

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
          <Image src={product_image} alt={product_name} />
        </Box>

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {product_off}
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
            {product_name}
          </Box>

          <Box>
            <Box as="span" color="gray.600" fontSize="sm" fontWeight="semibold">
              MRP : ₹ {product_price}
            </Box>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ₹ {product_mrp}
            </Text>
          </Box>
          <Box fontSize="sm" color="#FD7091">
            {product_giftcard}
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
              onClick={handleAddToCart}
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
