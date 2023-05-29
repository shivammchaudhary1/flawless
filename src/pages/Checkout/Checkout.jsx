import axios from "axios";
import { useState, useEffect } from "react";
import {
  Stack,
  Box,
  HStack,
  VStack,
  Heading,
  Input,
  Radio,
  Text,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Image,
  Button,
} from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const getData = () => {
  return axios.get("http://localhost:8080/buy");
};

const Checkout = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(99);
  const [final, setFinal] = useState(0);

  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  useEffect(() => {
    let calculatedSubtotal = 0;
    for (let i = 0; i < data.length; i++) {
      calculatedSubtotal += data[i].product_price;
    }
    setTotal(calculatedSubtotal);
  }, [data, shipping]);

  useEffect(() => {
    setFinal(total + shipping);
  }, [total, shipping]);

  const handleShipping = (e) => {
    setShipping(Number(e.target.value));
  };

  return (
    <Box>
      <HStack spacing="40px" align="flex-start">
        <Box w="50%" border="1px solid black" p="4">
          <Heading size="md" mb="4">
            Shipping Address
          </Heading>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" />
            <FormLabel>Street Address</FormLabel>
            <Input type="text" />
            <HStack spacing="20px" mt="2">
              <FormControl>
                <FormLabel>Zip Code</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>

            <CheckboxGroup colorScheme="red" defaultValue={[""]} mt="4">
              <HStack spacing="4">
                <Checkbox value="sameAddress">
                  Billing Address is same as Shipping Address
                </Checkbox>
              </HStack>
            </CheckboxGroup>
          </FormControl>
          {/* Shipping Address */}
          {/* Shipping Address */}
          {/* Shipping Address */}
          {/* Shipping Address */}
          <Box mt="8">
            <Heading size="md" mb="4">
              Shipping Method
            </Heading>
            <VStack spacing="4" align="start">
              <Radio value="249" onChange={handleShipping}>
                <Heading size="sm" mb="2">
                  Express: ₹ 249
                </Heading>
                <Text>Dispatch in 24 Hours</Text>
              </Radio>
              <Radio value="99" onChange={handleShipping}>
                <Heading size="sm" mb="2">
                  Standard: ₹ 99
                </Heading>
                <Text>Dispatch in 2-4 Days</Text>
              </Radio>
            </VStack>
          </Box>
          {/* Payment Information  */}
          {/* Payment Information  */}
          {/* Payment Information  */}
          {/* Payment Information  */}
          <Box mt="8">
            <Heading size="md" mb="4">
              Payment Information
            </Heading>
            <FormControl>
              <VStack spacing="4" align="start">
                <HStack spacing="4">
                  <FormLabel>Card No</FormLabel>
                  <Input type="number" />
                </HStack>
                <HStack spacing="4">
                  <FormLabel>Name on Card</FormLabel>
                  <Input type="text" />
                </HStack>
                <HStack spacing="4">
                  <FormLabel>Expiry Date</FormLabel>
                  <Input type="month" />
                </HStack>
                <HStack spacing="4">
                  <FormLabel>CVV/CVC</FormLabel>
                  <Input type="text" />
                </HStack>
              </VStack>
            </FormControl>
          </Box>
        </Box>

        <Box w="50%" border="1px solid red" p="4" bg="#F0F8FF">
          <Heading size="md" mb="4">
            Order Summary
          </Heading>
          <Box>
            {data.map((e) => {
              return (
                <Box key={e.id} mb="4">
                  <HStack>
                    <Image
                      w="25%"
                      src={e.product_image}
                      alt={e.product_name}
                      border="1px solid blue"
                    />

                    <VStack>
                      <Box w="100%" padding="2rem">
                        <Text fontSize="lg" border="1px solid blue">
                          {e.product_name}
                        </Text>
                        <Heading border="1px solid blue" size="sm">
                          Price: ₹ {e.product_price}
                        </Heading>
                        <HStack p="1rem">
                          <Heading size="sm">Quantity:</Heading>
                          <Box>
                            <FaPlusCircle />
                          </Box>
                          <Heading size="sm">1</Heading>
                          <Box>
                            <FaMinusCircle />
                          </Box>
                        </HStack>
                      </Box>
                    </VStack>
                  </HStack>
                </Box>
              );
            })}
          </Box>

          <Box mt="8">
            <Heading size="md" mb="4">
              Subtotal
            </Heading>
            <Text>Subtotal Amount: ₹{total}</Text>
          </Box>

          <Box mt="4">
            <Heading size="md" mb="4">
              Shipping Cost
            </Heading>
            <Text>Shipping Cost: ₹{shipping}</Text>
          </Box>

          <Box mt="4">
            <Heading size="md" mb="4">
              Discount
            </Heading>
            <FormControl>
              <HStack spacing="4">
                <Input type="text" placeholder="Enter coupon code" />
                <Button colorScheme="red">Apply Coupon</Button>
              </HStack>
            </FormControl>
          </Box>

          <Box mt="4">
            <Heading size="md" mb="4">
              Total
            </Heading>
            <Text>Total Amount: ₹{final}</Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Checkout;

// id: 55;
// product_giftcard: "Get Free Product";
// product_image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/8/f82ef778903487004818_1.jpg";
// product_mrp: 65;
// product_name: "Miss Claire Glimmersticks For Eyes";
// product_off: "10% Off";
// product_price: 59;
// product_rating: 3880;
// rating: 5;
