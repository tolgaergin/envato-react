import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import moment from 'moment';

// Articles about d3 with react
// https://swizec.com/blog/using-d3js-transitions-in-react/swizec/6797
// https://gist.github.com/kdubbels/afd45c3aa341b6424f2c2208c26f5e86
// https://gist.github.com/joshblack/09226f76ca55c5c82be1f2766c1fdc23

// login
// https://github.com/mxstbr/login-flow

// set the dimensions and margins of the graph
const margin = {
  top: 65,
  right: 0,
  bottom: 0,
  left: -1,
};
const fullWidth = 375;
const fullHeight = 220;

const width = fullWidth - margin.left - margin.right;
const height = fullHeight - margin.top - margin.bottom;

// parse the month / time
// props   "Sun Mar 01 00:00:00 +1100 2015"
// after d3 Tue May 31 2016 15:00:00 GMT+0100 (BST)
const parseTime = d3.timeParse('%a %b %d %H:%M:%S %Z %Y');
const bisectDate = d3.bisector(function (d) { return d.stringMonth; }).left;
const formatValue = d3.format(',.0f');
const formatCurrency = function (d) { return '$' + formatValue(d); };

// set the ranges
const setX = d3.scaleTime().range([0, width]);
const setY = d3.scaleLinear().range([height, 0]);

// define the area
const generateArea = d3.area()
  .x(function (d) { return setX(d.stringMonth); })
  .y0(height)
  .y1(function (d) { return setY(d.earnings); })
  .curve(d3.curveCatmullRom);

// define the line
const generateLine = d3.line()
  .x(function (d) { return setX(d.stringMonth); })
  .y(function (d) { return setY(d.earnings); })
  .curve(d3.curveCatmullRom);

// style
const StyledPathArea = styled.path `
  shape-rendering: crispEdges;
`;

const StyledPathLine = styled.path `
  fill: none;
  stroke: #51fd6a;
  stroke-width: 2px;
  shape-rendering: crispEdges;
`;

const StyledGrid = styled.line `
  stroke: rgba(127, 127, 127, 0.2);
  stroke-width: 1;
  stroke-dasharray: 1,1;
`;

const StyledTooltipRect = styled.rect `
  fill: none;
  pointer-events: all;
`;

const StyledRectClip = styled.rect `
  pointer-events: none;
`;

const StyledChartTooltip = styled.div `
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

const RelativeDiv = styled.div `
  position: relative;
  width: ${props => props.width ? props.width + 'px' : 'auto'};
  height: ${props => props.height ? props.height + 'px' : 'auto'};
`;

class ChartArea extends React.Component {
  render() {
    return (
      <StyledPathArea
        d={this.props.area}
        clipPath={`url(#${this.props.clipPath})`}
        fill={`url(#${this.props.gradient})`} />
    );
  }
}

class ChartLine extends React.Component {
  render() {
    return (
      <StyledPathLine
        d={this.props.line}
        clipPath={`url(#${this.props.clipPath})`} />
    );
  }
}

const StyledCircle = styled.circle `
  stroke: #37C34A;
  stroke-linecap: round;
  stroke-width: 1;
  fill: white;
`;

class ChartDots extends React.Component {
  render() {
    const circles = this.props.circles;
    return (
      <g>
        {circles.map((circle, i) =>
          <StyledCircle
            key={i}
            r="2"
            cx={setX(circle.stringMonth)}
            cy={setY(circle.earnings)}
            clipPath={`url(#${this.props.clipPath})`} />
        )}
      </g>
    );
  }
}

class ChartVerticalGrids extends React.Component {
  render() {
    const grids = this.props.grids;
    return (
      <g>
        {grids.map((grid, i) =>
          <StyledGrid
            key={i}
            x1={setX(grid.stringMonth)}
            x2={setX(grid.stringMonth)}
            y1={-margin.top}
            y2={setY(grid.earnings) - 2}
            clipPath={`url(#${this.props.clipPath})`} />
        )}
      </g>
    );
  }
}

const StyledText = styled.text `
  font-size: 12px;
  fill: rgba(0, 0, 0, 0.2);
`;

class ChartVerticalGridTexts extends React.Component {
  render() {
    const texts = this.props.texts;
    return (
      <g>
        {texts.map((text, i) =>
          <StyledText
            key={i}
            x={-margin.top + 5}
            y={-setX(text.stringMonth)}
            transform="rotate(90)"
            dy="20">
            {moment(text.stringMonth).format('MMM YY')}'
          </StyledText>
        )}
      </g>
    );
  }
}

const StyledFocus = styled.g `
  display: none;
`;

class MonthlyChart extends React.Component {

  constructor() {
    super();

    this.state = {
      data: [],
    };

    this.mouseMove = this.mouseMove.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  componentDidMount() {
    const userEarnings = this.props.userEarnings;
    const data = userEarnings.slice(userEarnings.length - 9, userEarnings.length);

    // format the data
    data.forEach(function (d) {
      d.stringMonth = parseTime(d.month);
      d.earnings = +d.earnings;
    });

    // sort the data
    data.sort(function (a, b) { return a.stringMonth - b.stringMonth; });

    this.setState({
      data,
    });

    d3.select(this.rect).on('mousemove', this.mouseMove.bind(this));

    d3.select(this.rectClip)
      .transition().duration(2000)
        .attr('width', fullWidth);
  }

  componentWillUnmount() {
    d3.select(this.rect).on('mousemove', null);
  }

  mouseOut() {
    d3.select(this.focus).style('display', 'none');
    d3.select(this.tooltip).style('opacity', 0);
  }

  mouseOver() {
    d3.select(this.focus).style('display', null);
    d3.select(this.tooltip).style('opacity', 0);
  }

  mouseMove() {
    const data = this.state.data;
    const rect = d3.select(this.rect).node();
    const x0 = setX.invert(d3.mouse(rect)[0]);
    const i = bisectDate(data, x0, 1);
    const d0 = data[i - 1];
    const d1 = data[i];
    const d = x0 - d0.stringMonth > d1.stringMonth - x0 ? d1 : d0;
    const focus = d3.select(this.focus);
    const tooltip = d3.select(this.tooltip);

    if (i < (data.length - 1) / 2) {
      tooltip.style('left', (parseFloat(setX(d.stringMonth)).toFixed(2) + 11) + 'px');
    } else {
      tooltip.style('left', (parseFloat(setX(d.stringMonth)).toFixed(2) - 36) + 'px');
    }

    tooltip
      .html(formatCurrency(d.earnings))
      .style('top', (setY(d.earnings) + margin.top - 15) + 'px')
      .style('opacity', 1);

    focus.attr('transform', 'translate(' + setX(d.stringMonth) + ',' + setY(d.earnings) + ')');
    focus.style('display', 'block');
  }

  render() {
    const data = this.state.data;

    // scale the range of the data
    setX.domain(d3.extent(data, function (d) { return d.stringMonth; }));

    setY.domain([0, d3.max(data, function (d) { return d.earnings; })]);

    return (
      <div>
        <RelativeDiv width={fullWidth} height={fullHeight}>
          <StyledChartTooltip innerRef={comp => this.tooltip = comp} />
          <svg width={fullWidth} height={fullHeight}>
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="rgba(103, 253, 81, 0.3)" />
                <stop offset="100%" stopColor="rgba(103, 253, 81, 0.7)" />
              </linearGradient>
            </defs>
            <g transform={`translate(${margin.left},${margin.top})`}>
              <ChartArea area={generateArea(data)} clipPath="clipPath" gradient="gradient" />
              <ChartLine line={generateLine(data)} clipPath="clipPath" />
              <ChartDots circles={data} clipPath="clipPath" />
              <ChartVerticalGrids grids={data} clipPath="clipPath" />
              <ChartVerticalGridTexts texts={data} />
              <StyledFocus innerRef={comp => this.focus = comp}>
                <circle r="5" fill="#2dc543"></circle>
              </StyledFocus>
              <StyledTooltipRect
                width={fullWidth}
                height={height}
                innerRef={comp => this.rect = comp}
                onMouseOut={this.mouseOut}
                onMouseOver={this.mouseOver}
              />
              <clipPath id="clipPath">
                <StyledRectClip
                  innerRef={comp => this.rectClip = comp}
                  width="0"
                  height={fullHeight}
                  y="-65"
                  x="0" />
              </clipPath>
            </g>
          </svg>
        </RelativeDiv>
      </div>
    );
  }
}

// const MonthlyChart = ({ userEarnings }) => (
//   <div>
//     <h2>Monthly Chart</h2>
//     <svg width={fullWidth} height={fullHeight}>
//       <g transform={`translate(${margin.left},${margin.top})`}></g>
//     </svg>
//   </div>
// );
//
// MonthlyChart.propTypes = {
//   userEarnings: React.PropTypes.array,
// };

export default MonthlyChart;
