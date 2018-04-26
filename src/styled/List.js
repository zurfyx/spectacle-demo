import React from 'react';
import styled from 'react-emotion';
import { List } from 'spectacle';

const StyledList = styled(List)`
  list-style-type: none;
`;

export default function (props) {
  return (
    <StyledList {...props}></StyledList>
  );
}
