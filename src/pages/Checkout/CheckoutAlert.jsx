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
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

const CheckoutAlert = ({ fullName, streetAddress, zipCode, city, email }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  //   onClick={handleSubmit}

  const handleSubmit = async () => {
    onOpen();
    try {
      const response = await axios.post(
        "https://flawless-backend.onrender.com/shipping-address",
        {
          fullName,
          streetAddress,
          zipCode,
          city,
          email,
        }
      );
      //   console.log("Response:", response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <Button
        colorScheme="red"
        onClick={handleSubmit}
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
        Pay
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Product Ordered Successfully
            </AlertDialogHeader>

            <AlertDialogBody>Thank You for Choosing us !</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>

              <Button
                colorScheme="red"
                //new method for changing routes
                as={RouterLink}
                to="/"
                //new method for changing routes
                onClick={onClose}
                ml={3}
                bg="#FC2779"
              >
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CheckoutAlert;
