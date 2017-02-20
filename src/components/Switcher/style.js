import styled from 'styled-components';

const theme = {
  rowWidth: '52',
  rowHeight: '32',
  rowBgColor: 'rgba(0, 0, 0, 0.2)',
  rowRadius: '20',

  thumbWidth: '26',
  thumbHeight: '26',
  thumbLeftSpace: '3',
  thumbRightSpace: '3',
  thumbBgColor: '#fff',
  thumbBoxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
  pressedThumbBoxShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 20px rgba(128, 128, 128, 0.1)',

  activeRowBgColor: '#37C34A',
  activeThumbBgColor: '#fff',
  activeThumbBoxShadow: '0 3px 2px rgba(0, 0, 0, 0.05)',
  activePressedThumbBoxShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 20px rgba(55, 195, 74, 0.2)',
};

export const StyledSwitch = styled.div `
  display: inline-block;
  position: relative;
  width: ${theme.rowWidth}px;
  height: ${theme.rowHeight}px;
  margin: 0;
  border-radius: ${theme.rowRadius}px;
  background-color: ${theme.rowBgColor};
  transition: background-color 280ms ease-out;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: ${(theme.rowHeight - theme.thumbHeight) / 2}px;
    left: ${theme.thumbLeftSpace}px;
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
      left: ${theme.rowWidth - theme.thumbWidth - theme.thumbRightSpace}px;
      background: ${theme.activeThumbBgColor};
      box-shadow: ${theme.activeThumbBoxShadow};
    }

    &:active {
      &::before {
        box-shadow: ${theme.activePressedThumbBoxShadow};
      }
    }
  }
`;
