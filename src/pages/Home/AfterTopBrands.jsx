import React from "react";
import { Image, Stack, Center } from "@chakra-ui/react";

const AfterTopBrands = () => {
  return (
    <>
      <Center>
        <Stack direction="row" p={10}>
          <Image
            objectFit="cover"
            src="https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-600,cm-pad_resize"
            alt="Dan Abramov"
          />
          <Image
            objectFit="cover"
            src="https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize"
            alt="Dan Abramov"
          />
        </Stack>
      </Center>
    </>
  );
};

export default AfterTopBrands;
