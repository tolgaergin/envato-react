import styled from 'styled-components';

export const Boxes = styled.ul `
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Box = styled.li `
  position: relative;
  flex-basis: 33.3%;
  flex-grow: 1;
  background-color: #fff;
  border-right: 1px solid rgba(151, 151, 151, 0.14);
  padding: 24px 0;
  text-align: center;

  &:last-of-type {
    border-right: 0;
  }

  img {
    display: block;
    margin: 0 auto 20px;
  }

  BoxText {
    display: block;
  }
`;

export const BoxText = styled.span `
  display: block;

  ${props => props.info && `
    font-size: 14px;
    opacity: 0.5;
    margin-bottom: 5px;
  `};
`;

export const Badge = styled.div `
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: #f00;
  color: #fff;
  padding: 2px 5px;
  border-radius: 10px;
  font-size: 12px;
`;
