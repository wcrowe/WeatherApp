import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Cell } from 'react-inline-grid';
import { Flex, Box } from 'reflexbox';

export default function Examples() {
  return (
    <div>
      <Flex
        align="center"
        gutter={2}
        justify="center"
      >
        <Box
          justify="center"
          align="center"
          col={4}
          p={2}
        >
          <h2>
            Examples
          </h2>
        </Box>
      </Flex>
      <Flex
        align="center"
        gutter={2}
        justify="center"
      >
          <Box
            justify="center"
            align="center"
            col={4}
          >
            <p>Here are some examples:</p>
          </Box>
          <ol>
            <Box
              col={12}
              p={2}
            >
              <li>
                <Link to="/?location=Tampa">Tampa, FL</Link>
             </li>
          </Box>
            <Box
              col={12}
              p={2}
            >
              <li>
                <Link to="/?location=Boulder">Boulder, CO</Link>
              </li>
            </Box>

          </ol>
      </Flex>
    </div>
  );
  }
