import React from "react";
import { Image, Stack,Center } from "@chakra-ui/react";

const AfterCarousal = () => {
  return (
    <>
      <Center>
        <Stack direction="row">
          <Image
            objectFit="cover"
            src="https://images-static.nykaa.com/uploads/fad4269e-a68e-4eca-9244-da27880090c7.jpg?tr=w-600,cm-pad_resize"
            alt="Dan Abramov"
          />
          <Image
            objectFit="cover"
            src="https://images-static.nykaa.com/uploads/5e9e60a2-2c21-48b9-98b8-5ba9155ddbe5.jpg?tr=w-600,cm-pad_resize"
            alt="Dan Abramov"
          />
        </Stack>
      </Center>

      <Center p={10}>
        <Image
          src="https://images-static.nykaa.com/uploads/2030f573-1d09-432d-aacb-24672ba9a0e1.jpg?tr=w-1200,cm-pad_resize"
          alt="Image"
        />
      </Center>
    </>
  );
};

export default AfterCarousal;
