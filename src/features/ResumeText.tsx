import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import { CustomLink as Link } from "../components";

type Props = {
  text: {
    id: number;
    text: string;
    link?: string;
  };
};

function ResumeText(props: Props) {
  const {
    text: { text, link },
  } = props;
  return (
    <Box pr={24}>
      <Heading mb={12}>{text}</Heading>
      {link && (
        <Link url={link} big>
          Link
        </Link>
      )}
    </Box>
  );
}

export default ResumeText;
