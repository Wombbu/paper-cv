import React from 'react';
import Paper { PaperTitle } from './Paper';

const TestPaper = {height, width, isReaded} =>
  <Paper
    height={height - 100}
    scatterX={width * 0.4}
    scatterY={-height * 0.3}
    scatterRotation={60}
    isReaded={isReaded}
  >
    <PaperTitle
      fontFamily="Reenie Beanie"
    >
    CV of Lauri Nevanperä
    </PaperTitle>
    <PaperParagraph>
      Hi! Im Lauri Nevanperä! <br />
      You might find some interesting information from these papers.
    </PaperParagraph>
  </Paper>
