import React from 'react';
import styled from 'react-emotion';
import { Row } from '../components';
import { color, font } from './theme';

const StyledTableRow = styled(Row)`
  text-align: left;
  font-size: 0.9em;

  &:first-child {
    font-family: ${font.secondary};
    font-size: 1em;
    border-bottom: 1px dashed ${color.separator};
    text-align: center;
  }
`;

export default StyledTableRow;
