import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #f5f5f5;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #ff5707;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #d60701;
      border-color: #d60701;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #d60701;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #444;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #ff5707;
    color: #fff;

    &::before {
      border-color: #ff5707 transparent;
    }
  }
`;
