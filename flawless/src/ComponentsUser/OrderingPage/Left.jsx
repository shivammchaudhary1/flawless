import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import axios from "axios";

const getData = () => {
  return axios.get(`http://localhost:8080/eye`);
};

const Left = () => {
  return (
    <>
      <Box display="flex">
        <Box m={25} p={25}>
          <Box mb={5}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Sorting By Popularity
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton pl={5} as={Button} rightIcon={<ChevronDownIcon />}>
                Category
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton pl={10} as={Button} rightIcon={<ChevronDownIcon />}>
                Brand
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Price
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Discount
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <Box>R</Box>
      </Box>
    </>
  );
};

export default Left;
