import styled from 'styled-components';

export const EmptyCenter = styled.div `
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  margin-top: -50px;
`;

export const EmptyImage = styled.img `
  position: relative;
  margin: 0 auto 30px;
`;

export const EmptyMessage = styled.div `
  font-size: 18px;
  color: #7b7b7b;
  text-align: center;
  padding: 0 40px;
`;

export const EmptyBottom = styled.div `
  position: absolute;
  width: calc(100% - 40px);
  left: 20px;
  bottom: 25px;
`;;

export const Button = styled.a `
  display: block;
  padding: 20px;
  text-align: center;
  color: rgba(76, 76, 76, 0.5);
  border: 1px solid rgba(76, 76, 76, 0.3);
  border-radius: 5px;
  text-decoration: none;
`;
