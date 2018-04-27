import React from 'react';
import styled from 'react-emotion';
import { Column } from '../components';
import { color } from './theme';

const StyledTableColumn = styled(Column)`
  padding: 15px 30px;

  &:not(:first-child) {
    border-left: 1px solid ${color.separator};
  }
`;

export default StyledTableColumn;
