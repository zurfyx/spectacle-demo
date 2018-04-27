import React from 'react';
import styled from 'react-emotion';
import { ListItem } from 'spectacle';

const StyledListItem = styled(ListItem)`
  padding-left: 1.1em;
  word-wrap: break-word;
  
  &:before {
    content: "–"; /* en dash */
    position: absolute;
    margin-left: -1.1em;
  }
`;

export default function (props) {
  return (
    <StyledListItem {...props}></StyledListItem>
  );
}
