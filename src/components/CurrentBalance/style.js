import styled from 'styled-components';

export const BalanceContainer = styled.div `
  padding: 30px 20px;
`;

export const Heading = styled.h2 `
  margin: 0 0 5px;
  font-size: 28px;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.4);
`;

export const Balance = styled.div `
  font-size: 58px;
  font-weight: 100;
  color: #2dc542;

  sup {
    position: relative;
    top: -0.9em;
    vertical-align: baseline;
    margin-right: 15px;
    font-size: 24px;
    color: #377f35;
  }
`;

export const Poor = styled.div `
  font-size: 32px;
  color: #c5312d;
  margin-bottom: 45px;
`;;
