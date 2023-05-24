import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";
import axios from "axios";

const Loginexp = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      const { token } = response.data;
      if (token) {
        setIsLoggedIn(true);
        setError("");
      } else {
        setError("Login Unsuccessful. Please check your email and password.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button mt={4} type="submit">
          Log In
        </Button>
      </form>
      {isLoggedIn ? (
        <Alert status="success">Login Successful</Alert>
      ) : (
        <Alert status="error">{error}</Alert>
      )}
    </div>
  );
};

export default Loginexp;
