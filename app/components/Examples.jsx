import React from 'react';
import { Link } from 'react-router';
import { TextAlignment } from 'react-foundation-components/lib/text-alignment';
import { Row, Column } from 'react-foundation-components/lib/grid';

export default function Examples() {
  return (
    <div>
      <TextAlignment alignment="center">

        <h2>
          Examples
        </h2>
        <p>Here are some examples:</p>
        <Row>
          <Column largeCentered="centered" small={4}>
            <ol>
              <Row>
                <Column largeCentered="centered" small={4}>
                  <TextAlignment alignment="left">
                    <li>
                      <Link to="/?location=Tampa">Tampa, FL</Link>
                    </li>
                  </TextAlignment>
                </Column>
              </Row>
              <Row>
                <Column largeCentered="centered" small={4}>
                  <TextAlignment alignment="left">
                    <li>
                      <Link to="/?location=Boulder">Boulder, CO</Link>
                    </li>
                  </TextAlignment>
                </Column>
              </Row>
            </ol>
          </Column>
        </Row>
      </TextAlignment>
    </div>
  );
}
