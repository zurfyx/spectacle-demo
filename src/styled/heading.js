import React from 'react';
import styled from 'react-emotion';
import { Heading } from 'spectacle';
import { color, font } from './theme';

const StyledHeading = styled(Heading)`
`;

export default function (props) {
  return (
    <StyledHeading
      textFont={font.secondary}
      textColor={color.realBlack}
      {...props}>
    </StyledHeading>
  );
}
