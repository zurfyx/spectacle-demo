import React from 'react';
import styled from 'react-emotion';
import { color } from './theme';

const StyledHighlight = styled('span')`
  padding: 5px 10px;
  color: ${color.highlightContrast};
  background-color: ${color.highlight};
`;

export default StyledHighlight;
