import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/core";
import { ReferenceColumn } from "./components";
import { Header, ResumeText } from "./features";
import { footnotes, texts } from "./resources";

function App() {
  const [footnoteId, setFootnoteId] = useState(0);

  return (
    <Box p={20}>
      <Header />
      <Grid templateColumns="3fr 1fr 1fr" gap={5} pt={12}>
        <ResumeText text={texts[footnoteId]} />
        <ReferenceColumn
          footnotes={footnotes.experience}
          title="Experience"
          onClick={setFootnoteId}
          activeIndex={footnoteId}
          isColumnActive={footnoteId < 5}
        />
        <ReferenceColumn
          footnotes={footnotes.projects}
          title="Projects"
          onClick={setFootnoteId}
          activeIndex={footnoteId}
          isColumnActive={footnoteId > 5}
        />
      </Grid>
    </Box>
  );
}

export default App;
