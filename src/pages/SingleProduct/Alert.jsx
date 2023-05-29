import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

const Alert = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleBuy = () => {
    onOpen();
    axios
      .post("https://flawless-backend.onrender.com/buy", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.log({ error: error.message });
      });
  };

  return (
    <>
      <Button
        colorScheme="red"
        onClick={handleBuy}
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        borderRadius={"10px"}
        bg="#FC2779"
        color="#fff"
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
      >
        Buy Now
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Product Added Successfully
            </AlertDialogHeader>

            <AlertDialogBody>
              Click on the Check Out button to Continue
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>

              <Button
                colorScheme="red"
                //new method for changing routes
                as={RouterLink}
                to="/checkout"
                //new method for changing routes
                onClick={onClose}
                ml={3}
                bg="#FC2779"
              >
                Checkout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Alert;
