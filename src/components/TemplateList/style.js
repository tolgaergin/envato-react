import styled from 'styled-components';

export const Template = styled.a `
  display: block;
  position: relative;
  width: calc(100% - 40px);
  height: 196px;
  margin: 20px 20px 0;
  border: 1px solid rgba(205, 206, 210, 0.5);
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;

  &:last-of-type {
    margin-bottom: 20px;
  }
`;

export const TemplateBg = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-size: cover;
  background-position: top center;
  pointer-events: none;
  ${props => props.bgImage && 'background-image: url(' + props.bgImage + ')'}
`;

export const TemplateOverlay = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.9) 80%, rgba(255, 255, 255, 1) 100%);
`;

export const TemplateName = styled.div `
  position: absolute;
  left: 20px;
  top: 65px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const CategoryName = styled.div `
  position: absolute;
  left: 20px;
  top: 100px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;

export const SaleCount = styled.div `
  display: flex;
  position: absolute;
  left: 20px;
  bottom: 30px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);

  img {
    margin-right: 10px;
  }
`;

export const Rating = styled.div `
  display: flex;
  position: absolute;
  left: 110px;
  bottom: 30px;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);

  img {
    margin-right: 10px;
  }
`;
