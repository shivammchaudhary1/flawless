import React from "react";
import { Image, Stack, Box, Center, Text } from "@chakra-ui/react";

const AfterOnlyatNykaa = () => {
  return (
    <>
      <Box p={5}>
        <Text fontSize={25} textAlign={["left", "center"]} fontWeight="bold">
          Discover Our Favourites
        </Text>
      </Box>
      <Center>
        <Stack direction="row" p={5}>
          <Image
            objectFit="cover"
            src="https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg?tr=w-1200,cm-pad_resize"
            alt="Dan Abramov"
          />
        </Stack>
      </Center>
    </>
  );
};

export default AfterOnlyatNykaa;
