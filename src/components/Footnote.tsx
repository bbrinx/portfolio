import React from "react";
import { Link, Grid, Text } from "@chakra-ui/core";
import { FootnoteType } from "./types";

type Props = {
  content: FootnoteType;
  active: boolean;
  onClick: (footnoteId: number) => void;
};

function Footnote(props: Props) {
  const {
    content: { id, date, title, detail, tools },
    onClick,
    active,
  } = props;

  function handleClick() {
    onClick(id);
  }

  const color = active ? "main" : undefined;

  return (
    <Grid templateColumns="20px 200px" gap={3} mb={5}>
      <Text fontSize="xs" fontFamily="mono" color={color}>
        [{id}]
      </Text>
      <Link onClick={handleClick} color={color}>
        <Text fontSize="xs" fontFamily="mono">
          {date}
        </Text>
        <Text fontSize="xs" fontFamily="mono" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="xs" fontFamily="mono">
          {detail}
        </Text>
        <Text fontSize="xs" fontFamily="mono">
          {Boolean(tools?.length) && `[${tools!.join(",")}]`}
        </Text>
      </Link>
    </Grid>
  );
}

export default Footnote;
