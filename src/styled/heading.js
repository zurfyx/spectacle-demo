import React from 'react';
import styled from 'react-emotion';
import { Heading } from 'spectacle';

const StyledHeading = styled(Heading)`
`;

export default function (props) {
  return (
    <StyledHeading
      textFont="lato"
      textColor="realBlack"
      {...props}>
    </StyledHeading>
  );
}
