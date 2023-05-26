import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <RouterLink to="/">
          <Box size="sm">
            <Image
              // src="https://i.ibb.co/10MwCh1/flawless.png"
              src="https://i.ibb.co/MR3Y7pm/flawless1.png"
              // src="https://i.ibb.co/wRqC4bC/flawless2.png"
              alt="Dan Abramov"
              boxSize="100px"
            />
          </Box>
        </RouterLink>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            {/* <Image
                  src="https://i.ibb.co/10MwCh1/flawless.png"
                  alt="Dan Abramov"
                  boxSize="100px"
                /> */}
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Box mr="30px">
          <Input placeholder="Search" size="sm" />
        </Box>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <RouterLink to="/login">
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
          </RouterLink>
          <RouterLink to="/signup">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button>
          </RouterLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Categories",
    href: "/products",
    children: [
      {
        label: "Makeup",
        subLabel: "Eyes",
        href: "/products",
      },
      {
        label: "Skin",
        subLabel: "Serum & Essence",
        href: "/products",
      },
      {
        label: "Hair",
        subLabel: "Shampoo",
        href: "/products",
      },
      {
        label: "Appliances",
        subLabel: "Hair Dryers",
        href: "/products",
      },
      {
        label: "Natural",
        subLabel: "Face Wash",
        href: "/products",
      },
      {
        label: "Mom & Baby",
        subLabel: "Body Wash",
        href: "/products",
      },
      {
        label: "Health & Wellness",
        subLabel: "Multi Vitamins",
        href: "/products",
      },
      {
        label: "Men",
        subLabel: "Shavers",
        href: "/products",
      },
    ],
  },
  {
    label: "Brands",
    href: "/products",
    children: [
      {
        label: "Lakme'",
        href: "/products",
      },
      {
        label: "Loreal",
        href: "/products",
      },
      {
        label: "Lotus Herbal",
        href: "/products",
      },
      {
        label: "Nivea",
        href: "/products",
      },
      {
        label: "Bioteque",
        href: "/products",
      },
      {
        label: "Olay",
        href: "/products",
      },
      {
        label: "LUXE",
        href: "/products",
      },
    ],
  },
  {
    label: "Luxe",
    href: "/products",
    children: [
      {
        label: "Makeup Collection",
        subLabel: "HighLighter",
        href: "/products",
      },
      {
        label: "Eyes",
        subLabel: "Eye Shadow",
        href: "/products",
      },
      {
        label: "Lip",
        subLabel: "LipStick",
        href: "/products",
      },
      {
        label: "Nails",
        subLabel: "Nail Polish",
        href: "/products",
      },
    ],
  },
  {
    label: "Nykaa Fashion",
    href: "/products",
    children: [
      {
        label: "Women",
        subLabel: "Traditional",
        href: "/products",
      },
      {
        label: "Men",
        subLabel: "Ethenic",
        href: "/products",
      },
      {
        label: "Home",
        subLabel: "Kitchen & Dining",
        href: "/products",
      },
      {
        label: "Top Brands",
        subLabel: "Puma",
        href: "/products",
      },
    ],
  },
  {
    label: "Beauty Advice",
    href: "/products",
    children: [
      {
        label: "Beauty Book",
        subLabel: "Nykaa Digital Magazines",
      },
      {
        label: "Nykaa TV",
        subLabel: "MasterClass by Experts",
      },
      {
        label: "Beauty Buying Guide",
        subLabel: "Tip to explore",
      },
      {
        label: "Top Brands",
        subLabel: "Puma",
      },
    ],
  },
];
