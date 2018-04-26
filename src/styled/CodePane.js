import React from 'react';
import styled from 'react-emotion';
import { CodePane } from 'spectacle';

const StyledCodePane = styled(CodePane)`
`;

export default function (props) {
  return (
    <StyledCodePane
      overflow="overflow"
      theme="external"
      {...props}>
    </StyledCodePane>
  );
}
