import React from 'react';
import styled from 'react-emotion';
import StyledText from './Text';

const StyledParagraph = styled(StyledText)`
`;

export default function (props) {
  return (
    <StyledParagraph margin="42px 0 0" {...props}></StyledParagraph>
  );
}
