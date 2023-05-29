import axios from "axios";
import { useState, useEffect } from "react";
import {
  Box,
  HStack,
  VStack,
  Heading,
  Input,
  Radio,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Image,
  Button,

} from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import CheckoutAlert from "./CheckoutAlert";

const getData = () => {
  return axios.get("https://flawless-backend.onrender.com/buy");
};

const Checkout = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(99);
  const [final, setFinal] = useState(0);
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getData()
      .then((res) => {
        // console.log(res.data);
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

  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://flawless-backend.onrender.com/buy/${id}`);
      const updatedData = data.filter((e) => e.id !== id);
      setData(updatedData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <Box>
      <HStack spacing="40px" align="flex-start">
        <Box w="50%" p="4">
          <Heading size="md" mb="4">
            Shipping Address
          </Heading>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <FormLabel>Street Address</FormLabel>
            <Input
              type="text"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <HStack spacing="20px" mt="2">
              <FormControl>
                <FormLabel>Zip Code</FormLabel>
                <Input
                  type="number"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </FormControl>
            </HStack>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          {/* Shipping Method */}
          {/* Shipping Method */}
          {/* Shipping Method */}
          {/* Shipping Method */}

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
          <Box mt="8" mb="8">
            <Heading size="md" mb="4">
              Payment Information
            </Heading>

            <HStack spacing="20px" mt="2">
              <FormControl>
                <FormLabel>Name on Card</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Card No</FormLabel>
                <Input type="Number" />
              </FormControl>
            </HStack>
            <HStack spacing="20px" mt="2">
              <FormControl>
                <FormLabel>Expiry Date</FormLabel>
                <Input type="month" />
              </FormControl>
              <FormControl>
                <FormLabel>CVV / CVC</FormLabel>
                <Input type="Number" />
              </FormControl>
            </HStack>
          </Box>
        </Box>

        <Box w="50%" p="4" bg="#F0F8FF">
          <Heading size="md" mb="4">
            Order Summary
          </Heading>

          {/* product details  */}
          {/* product details  */}
          {/* product details  */}
          {/* product details  */}
          {/* product details  */}
          <Box>
            {data.map((e) => {
              return (
                <Box key={e.id} mb="4">
                  <HStack>
                    <Image w="25%" src={e.product_image} alt={e.product_name} />

                    <VStack>
                      <Box>
                        <Text fontSize="lg">{e.product_name}</Text>
                        <Heading size="md" m="10px">
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
                          <Box>
                            <Button
                              onClick={() => handleRemove(e.id)}
                              colorScheme="red"
                              ml="1rem"
                              size="sm"
                            >
                              Remove
                            </Button>
                          </Box>
                        </HStack>
                      </Box>
                    </VStack>
                  </HStack>
                </Box>
              );
            })}
          </Box>

          {/* product details  */}
          {/* product details  */}
          {/* product details  */}
          {/* product details  */}
          {/* product details  */}

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
                <Button bg="#FC2779" color="white">
                  Apply Coupon
                </Button>
              </HStack>
            </FormControl>
          </Box>

          <Box mt="4">
            <Heading size="md" mb="4">
              Total Amount: ₹{final}
            </Heading>
          </Box>
          <Box>
            <CheckoutAlert
              fullName={fullName}
              streetAddress={streetAddress}
              zipCode={zipCode}
              city={city}
              email={email}
            />
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

// email
