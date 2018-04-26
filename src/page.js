import React, { Component } from 'react';
import Presentation from './presentation';

import styled, { css } from 'react-emotion';

const PresentationTitleWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px;
  font-size: 1.2rem;
  color: #c1c1c1;
  z-index: 42;
`;

const IconWrapper = styled('div')`
  display: inline-block;
  margin-right: 15px;
  font-size: 0.8em;
  line-height: 0.8rem;
`;

const Icon = styled('i')`
  padding-bottom: 2px;
`;

const Label = styled('span')`
  display: inline-block;
`;

export default class Page extends Component {
  render() {
    return (
      <div>
        <PresentationTitleWrapper>
          <IconWrapper><Icon className={`far fa-user`}></Icon></IconWrapper>
          <Label>Cool presentations</Label>
        </PresentationTitleWrapper>
        <Presentation />
      </div>
    );
  }
}
