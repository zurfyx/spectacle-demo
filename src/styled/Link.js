import React from 'react';
import styled from 'react-emotion';
import { StyledText } from '.';

const StyledA = styled('a')`
  text-decoration: none;
`;

export default function (props) {
  const { href, ...textProps } = props;
  return (
    <StyledA href={href} target="_blank" rel="noopener">
      <StyledText textSize="1em" {...textProps} />
    </StyledA>
  );
}
