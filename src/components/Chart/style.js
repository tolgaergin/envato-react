import styled from 'styled-components';

export const StyledPathArea = styled.path `
  shape-rendering: crispEdges;
`;

export const StyledPathLine = styled.path `
  fill: none;
  stroke: #51fd6a;
  stroke-width: 2px;
  shape-rendering: crispEdges;
`;

export const StyledGrid = styled.line `
  stroke: rgba(127, 127, 127, 0.2);
  stroke-width: 1;
  stroke-dasharray: 1,1;
`;

export const StyledTooltipRect = styled.rect `
  fill: none;
  pointer-events: all;
`;

export const StyledRectClip = styled.rect `
  pointer-events: none;
`;

export const StyledChartTooltip = styled.div `
  position: absolute;
  text-align: center;
  padding: 2px 3px;
  background-color: #2dc543;
  color: #fff;
  border-radius: 4px;
  opacity: 0;
  font-size: 12px;
  min-width: 30px;
`;

export const RelativeDiv = styled.div `
  position: relative;
  width: ${props => props.width ? props.width + 'px' : 'auto'};
  height: ${props => props.height ? props.height + 'px' : 'auto'};
`;

export const StyledCircle = styled.circle `
  stroke: #37C34A;
  stroke-linecap: round;
  stroke-width: 1;
  fill: white;
`;

export const StyledText = styled.text `
  font-size: 12px;
  fill: rgba(0, 0, 0, 0.2);
`;

export const StyledFocus = styled.g `
  display: none;
`;

export const StyledEmpty = styled.div `
  position: relative;
`;

export const EmptySvg = styled.img `
  display: block;
  width: 100%;
  height: auto;
`;

export const EmptyText = styled.div `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #7b7b7b;
  font-size: 18px;
  text-align: center;
  padding: 0 40px;
  margin-top: -40px;
`;;
