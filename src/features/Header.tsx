import React from "react";
import { Flex, Heading } from "@chakra-ui/core";
import { CustomLink as Link } from "../components";

function Header() {
  return (
    <Flex
      as="nav"
      alignItems="baseLine"
      backgroundImage="linear-gradient(90deg,#33302d 50%,hsla(0,0%,100%,0) 0)"
      backgroundPosition="bottom"
      backgroundSize="8px 1px"
      backgroundRepeat="repeat-x"
      pb={1}
      justifyContent="space-between"
    >
      <Flex alignItems="baseLine" flex="6">
        <Heading as="h1" size="xl" fontWeight="thin" mr={5}>
          Jonathan Derin
        </Heading>
        <Heading as="h3" size="sm" fontFamily="mono" textTransform="uppercase">
          Software Engineer
        </Heading>
      </Flex>
      <Flex justifyContent="space-between" flex="1">
        <Link url="https://github.com/bbrinx">github</Link>
        <Link url="https://www.linkedin.com/in/jonathan-derin">linkedin</Link>
      </Flex>
    </Flex>
  );
}

export default Header;
