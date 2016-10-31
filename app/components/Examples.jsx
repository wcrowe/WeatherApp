import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Cell } from 'react-inline-grid';

export default function Examples() {
  return (
    <div>
      <Grid>
        <Row is="center">
          <Cell is="2">
            <h2>
              Examples
            </h2>
          </Cell>
        </Row>
      </Grid>
      <Grid>
        <Row is="center">
          <Cell is="2">
            <p>Here are some examples:</p>
          </Cell>
        </Row>
      </Grid>
      <ol>
        <Grid>
          <Row is="center">
            <Cell is="2">
              <li>
                <Link to="/?location=Tampa">Tampa, FL</Link>
              </li>
            </Cell>
          </Row>
        </Grid>
        <Grid>
          <Row is="center">
            <Cell is="2">
              <li>
                <Link to="/?location=Boulder">Boulder, CO</Link>
              </li>
            </Cell>
          </Row>
        </Grid>
      </ol>

    </div>
  );
}
