import styled from 'styled-components';

export const SettingsList = styled.ul `
  margin: 20px 0;
`;

export const ListItem = styled.li `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #fff;
  border-top: 1px solid rgba(205, 206, 210, 0.5);
  min-height: 35px;

  ${props => props.center && `
    justify-content: center;
  `};

  ${props => props.noPadding && `
    padding: 0;
  `};

  ${props => props.color && `
    color: ${props.color};
  `}

  &:last-of-type {
    border-bottom: 1px solid rgba(205, 206, 210, 0.5);
  }
`;

export const BlockLink = styled.a `
  width: 100%;
  text-align: center;
  padding: 20px;
  text-decoration: none;

  ${props => props.color && `
    color: ${props.color};
  `}

  ${props => props.hoverColor && `
    &:hover {
      color: ${props.hoverColor};
    }
  `}
`;;
