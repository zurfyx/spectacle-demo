import React from 'react';
import styled from 'styled-components';
import { Heading } from 'spectacle';

const StyledHeading = styled(Heading)`
`;

export default function (props) {
  return (
    <StyledHeading
      textFont="primary"
      textColor="secondary"
      {...props}>
    </StyledHeading>
  );
}
