import React from "react";
import { css } from "@emotion/core";
import { Link } from "@chakra-ui/core";

type Props = {
  url: string;
  children?: React.ReactNode;
  big?: boolean;
};

const linkStyles = css({
  "&:hover": {
    textDecoration: "none",
  },
  "&:after": {
    content: `"\u2192"`,
    opacity: 0,
    position: "absolute",
    transform: "translate(-10%, 0)",
    transition: "all 0.2s",
  },
  "&:hover:after": {
    opacity: 1,
    transform: "translate(30%, 0)",
  },
});

function CustomLink(props: Props) {
  const { big, url, children } = props;
  const fontSize = big ? "4xl" : "xs";
  const fontWeight = big ? "medium" : "thin";
  const fontFamily = big ? "body" : "mono";
  const color = big ? "main" : undefined;

  return (
    <Link
      href={url}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      css={linkStyles}
      color={color}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
