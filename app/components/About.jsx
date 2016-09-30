import React from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';

const About = () => {
  return (

    <Grid>
      <Row is="center">
        <Cell is="2">
    <h2>
      About
    </h2>
      <p>This is the about page.</p>
          </Cell>
      </Row>
    </Grid>
  );
};

export default About;
