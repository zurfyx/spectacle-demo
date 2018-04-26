import React from 'react';
import styled from 'react-emotion';
import { Text } from 'spectacle';

const StyledText = styled(Text)`
`;

export default function (props) {
  return (
    <StyledText
      textColor="grey"
      {...props}>
    </StyledText>
  )
}