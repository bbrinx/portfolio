import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/core";
import Footnote from "./Footnote";
import { FootnoteType } from "./types";
type Props = {
  footnotes: FootnoteType[];
  activeIndex: number;
  title: string;
  onClick: (footnoteId: number) => void;
  isColumnActive: boolean;
};
function ReferenceColumn(props: Props) {
  const { footnotes, activeIndex, onClick, title, isColumnActive } = props;

  return (
    <Box>
      <Heading
        as="h3"
        size="sm"
        mb={3}
        color={isColumnActive ? "main" : undefined}
      >
        {title}
      </Heading>
      {footnotes.map((footnote) => (
        <Footnote
          content={footnote}
          onClick={onClick}
          active={activeIndex === footnote.id}
        />
      ))}
    </Box>
  );
}

export default ReferenceColumn;
