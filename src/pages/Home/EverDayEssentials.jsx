import React from "react";
import Carousel from "better-react-carousel";
import { Box, Text, Image, Center, HStack } from "@chakra-ui/react";

const EverDayEssentials = () => {
  return (
    <>
      <Box bg="#E5F2F4">
        <Box p={10} bg>
          <Center m={2}>
            <Text
              fontSize={25}
              textAlign={["left", "center"]}
              fontWeight="bold"
            >
              Everyday Essential
            </Text>
          </Center>
          <Center p={5}>
            <Image
              src="https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-1200,cm-pad_resize"
              alt="error"
            />
          </Center>
          <Center>
            <Carousel cols={6} rows={1} gap={10} loop>
              <Carousel.Item>
                <img
                  width="auto"
                  src="https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize"
                  alt="error"
                />
                <p
                  style={{
                    backgroundColor: "lightGrey",
                    fontWeight: "normal",
                    textAlign: "center",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  Moisturisers
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width="auto"
                  src="https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-240,cm-pad_resize"
                  alt="error"
                />
                <p
                  style={{
                    backgroundColor: "lightGrey",
                    fontWeight: "normal",
                    textAlign: "center",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  Bath & Body
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width="auto"
                  src="https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize"
                  alt="error"
                />
                <p
                  style={{
                    backgroundColor: "lightGrey",
                    fontWeight: "normal",
                    textAlign: "center",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  Face Washes
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width="auto"
                  src="https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-240,cm-pad_resize"
                  alt="error"
                />
                <p
                  style={{
                    backgroundColor: "lightGrey",
                    fontWeight: "normal",
                    textAlign: "center",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  Budget Makeup
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width="auto"
                  src="https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-240,cm-pad_resize"
                  alt="error"
                />
                <p
                  style={{
                    backgroundColor: "lightGrey",
                    fontWeight: "normal",
                    textAlign: "center",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  Value Combos
                </p>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  width="auto"
                  src="https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-240,cm-pad_resize"
                  alt="error"
                />
                <p
                  style={{
                    backgroundColor: "lightGrey",
                    fontWeight: "normal",
                    textAlign: "center",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  Shampoo
                </p>
              </Carousel.Item>
            </Carousel>
          </Center>
        </Box>
      </Box>
      <Box>
        <Center m={2}>
          <Text fontSize={25} textAlign={["left", "center"]} fontWeight="bold">
            Categories In Focus
          </Text>
        </Center>
        <Center>
          <HStack gap={10} p={5}>
            <Image
              src="https://images-static.nykaa.com/uploads/e0c3b01f-ae84-4e5a-a774-e6197d83787b.jpg?tr=w-600,cm-pad_resize"
              alt="error"
              boxSize="100%"
            />
            <Image
              src="https://images-static.nykaa.com/uploads/733aca33-0db3-4b1b-82ed-1bd58f2cbc18.jpg?tr=w-600,cm-pad_resize"
              alt="error"
              boxSize="100%"
            />
          </HStack>
        </Center>
      </Box>
    </>
  );
};

export default EverDayEssentials;
