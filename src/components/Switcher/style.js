import styled from 'styled-components';

const theme = {
  rowWidth: '50',
  rowHeight: '16',
  rowBgColor: 'rgba(0, 0, 0, 0.2)',

  thumbWidth: '24',
  thumbHeight: '24',
  thumbBgColor: '#fafafa',
  thumbBoxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  pressedThumbBoxShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 20px rgba(128, 128, 128, 0.1)',

  activeRowBgColor: 'rgba(0, 0, 255, 0.5)',
  activeThumbBgColor: 'blue',
  activePressedThumbBoxShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 20px rgba(0, 0, 255, 0.2)',
};

export const StyledSwitch = styled.div `
  display: inline-block;
  position: relative;
  width: ${theme.rowWidth}px;
  height: ${theme.rowHeight}px;
  margin: 5px 0 15px;
  border-radius: 10px;
  background-color: ${theme.rowBgColor};
  transition: background-color 280ms ease-out;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: ${(theme.rowHeight - theme.thumbHeight) / 2}px;
    left: 0;
    width: ${theme.thumbWidth}px;
    height: ${theme.thumbHeight}px;
    background: ${theme.thumbBgColor};
    box-shadow: ${theme.thumbBoxShadow};
    border-radius: 50%;
    transition: all 280ms ease-out;
  }

  &:active {
    &::before {
      box-shadow: ${theme.pressedThumbBoxShadow};
    }
  }
`;

export const StyledInput = styled.input `
  display: none;

  &:checked + div {
    background: ${theme.activeRowBgColor};

    &::before {
      left: ${theme.rowWidth - theme.thumbWidth}px;
      background: ${theme.activeThumbBgColor};
    }

    &:active {
      &::before {
        box-shadow: ${theme.activePressedThumbBoxShadow};
      }
    }
  }
`;
