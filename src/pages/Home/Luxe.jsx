import React from "react";
import Carousel from "better-react-carousel";
import { Center, Box, Text, Image } from "@chakra-ui/react";

const Luxe = () => {
  return (
    <>
      <Text ml={5} p={2} fontSize={25} fontWeight="bold">
        Brand You Can't Miss
      </Text>
      <Box m={5} p={5}>
        {" "}
        <Text ml={5} p={2} fontSize={15} fontWeight="bold">
          Luxe
        </Text>
        <Center>
          <Carousel cols={5} rows={1} gap={10} loop>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/1f634467-5f84-4271-8c05-132863121814/default.jpg?tr=w-240,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/d6f15b78-2161-4e51-a4f2-1f006f8aeba8/default.png?tr=w-240,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/82506caf-d6d0-42d7-8eba-3b0cb3fc171f/default.jpg?tr=w-240,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/0662fd88-b6d9-447d-9000-578ed4c29295/default.jpg?tr=w-240,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/6385efda-6681-4121-8d36-67f94deab92a/default.jpg?tr=w-240,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/04e860f9-53bf-4295-9b66-d30826079aa3/default.jpg?tr=w-240,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
          </Carousel>
        </Center>
      </Box>
      {/* Makeup */}
      <Box m={5} p={5}>
        <Text ml={5} p={2} fontSize={15} fontWeight="bold">
          Makeup
        </Text>
        <Center>
          <Carousel cols={5} rows={1} gap={10} loop>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/76d06350-a7c8-4e3d-9237-03872888e61c/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/754035b1-ce14-460c-bb2f-a7bb353665c1/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/21fa5704-4c46-473e-8d10-d9e8b2f454b6/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/ae13f30b-8d24-462f-973d-735e26660bd9/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/7199915c-1f48-47c9-9dd1-9b103f56c145/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
          </Carousel>
        </Center>
      </Box>
      {/* Skin  */}
      <Box m={5} p={5}>
        <Text ml={5} p={2} fontSize={15} fontWeight="bold">
          Skin
        </Text>
        <Center>
          <Carousel cols={5} rows={1} gap={10} loop>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/18238bf6-d86f-42f8-8b5c-c5078d134c7b/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/53d29f6f-946b-4dfe-8be4-64cdab313e08/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/103494aa-63f7-4094-92c8-3ff067cf15b0/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/f2611b74-427b-4e32-bd4d-e4bd5b71c053/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/aeabb1b1-ac11-4b76-a2f5-fd7e73a2e971/default.png?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/6b74e15b-5d28-4cdf-9a74-ef607bfc25b5/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                alt="something went wrong"
                src="https://images-static.nykaa.com/creatives/1b23a428-80ce-4469-9856-68ac833f6b26/default.jpg?tr=w-480,cm-pad_resize"
              />
            </Carousel.Item>
          </Carousel>
        </Center>
      </Box>

      {/* vjibdijb  */}
      <Box m={5} p={5}>
        <Text ml={5} p={2} fontSize={15} fontWeight="bold">
          Global Faves
        </Text>
        <Center>
          <Carousel cols={5} rows={1} gap={10} loop>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/5bab105d-e9c1-4009-aacb-fb1d60f3a65e/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/8a29fae7-d00b-4be6-a3c0-9069cf0199d0/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/76746adc-cfd6-442a-ad44-c8a1e6c0bc4a/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/2a980f30-a4b6-459f-9b88-abccf26ac58e/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/a26c9442-0d43-46a4-8d11-f9e2a62d59cb/default.png?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/creatives/eaf056b1-4c12-4f01-ba8e-a91cf564a92e/default.jpg?tr=w-480,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
          </Carousel>
        </Center>
      </Box>
      <Box>
        <Text ml={5} p={2} fontSize={25} fontWeight="bold">
          Pop-Up Stores
        </Text>
        <Text ml={7} p={2} fontSize={15} fontWeight="normal" mt={-5}>
          From Nykaa Fashion
        </Text>
        <Center>
          <Box w="50%" gap={10} p={10}>
            <Image
              src="https://images-static.nykaa.com/uploads/25a2e412-b051-4c62-8c30-c573f911d305.jpg?tr=w-1200,cm-pad_resize"
              alt="something went wrong"
            />
            <Text fontSize={25}> Upto 70% Off</Text>
          </Box>
          <Box gap={10} p={10} w="50%">
            <Image
              src="https://images-static.nykaa.com/uploads/e4c5e208-1dfc-499e-b1aa-02fede0a6e4c.jpg?tr=w-1200,cm-pad_resize"
              alt="something went wrong"
            />
            <Text fontSize={25}> Exciting Offer You don't want to miss</Text>
          </Box>
        </Center>
      </Box>

      <Box>
        <Text ml={5} p={2} fontSize={25} fontWeight="bold">
          Beauty Advice
        </Text>
        <Text ml={7} p={2} fontSize={15} fontWeight="normal" mt={-5}>
          Discover Latest Tips & Tricks
        </Text>
        <Center>
          <Box w="50%" gap={5} p={10}>
            <Image
              src="https://images-static.nykaa.com/uploads/71c7558d-637c-40ee-b09b-7dfda35cf125.jpg?tr=w-1200,cm-pad_resize"
              alt="something went wrong"
            />
            <Text fontSize={25}>
              {" "}
              Catch Up on Top Trends, Expert Advice, Fresh Launches & More
            </Text>
          </Box>
          <Box gap={5} p={10} w="50%">
            <Image
              src="https://images-static.nykaa.com/uploads/a3720b61-fd58-40ff-90cd-72eb5b5ee3d4.jpg?tr=w-1200,cm-pad_resize"
              alt="something went wrong"
            />
            <Text fontSize={25}>
              {" "}
              Catch Up on Top Trends, Expert Advice, Fresh Launches & More
            </Text>
          </Box>
        </Center>
      </Box>

      {/* last carousal  */}

      <Box m={5} p={5}>
        {" "}
        <Center>
          <Carousel cols={5} rows={1} gap={10} loop>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/0e08a891-7639-4f26-9dce-8e798419f28a.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/29fb956f-7188-4a67-977c-b9fdd8951145.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/747d8b0f-0426-4b2b-9ea3-36a0032f440a.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/c06bd160-a361-4352-9947-ef84b9ecd0f6.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/75fb7306-0c85-42a3-9cf8-f3c8f087393a.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/6b78a707-3599-44c1-aba3-8fe860134a44.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/8849f75e-59b0-4f22-91b7-5bb68220466a.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/27a3930c-4000-4929-b294-eb609eaed489.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/1b21f5c8-d884-403a-95d9-dc7b482dfd62.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/2d5bf6c0-6ca8-409c-8073-c012196c6496.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="auto"
                src="https://images-static.nykaa.com/uploads/822a45d4-a12d-4e58-8328-fc270b8f95a4.jpg?tr=w-400,cm-pad_resize"
                alt="something went wrong"
              />
            </Carousel.Item>
          </Carousel>
        </Center>
      </Box>
    </>
  );
};

export default Luxe;
