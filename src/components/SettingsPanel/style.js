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

  &:last-of-type {
    border-bottom: 1px solid rgba(205, 206, 210, 0.5);
  }
`;
