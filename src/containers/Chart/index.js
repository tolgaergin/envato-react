import React from 'react';
import * as d3 from 'd3';

// import components
import Area from '../../components/Chart/Area';
import Dots from '../../components/Chart/Dots';
import Line from '../../components/Chart/Line';
import VerticalGrids from '../../components/Chart/VerticalGrids';
import VerticalGridTexts from '../../components/Chart/VerticalGridTexts';

// import styled components
import {
  RelativeDiv,
  StyledChartTooltip,
  StyledFocus,
  StyledTooltipRect,
  StyledRectClip,
} from '../../components/Chart/style';

// set the dimensions and margins of the chart
const settings = {
  margin: {
    top: 65,
    right: 0,
    bottom: 0,
    left: -1,
  },
  fullWidth: 375,
  fullHeight: 220,
  get width() {
    return this.fullWidth - this.margin.left - this.margin.right;
  },

  get height() {
    return this.fullHeight - this.margin.top - this.margin.bottom;
  },
};

// parse the month / time
// envato date "Sun Mar 01 00:00:00 +1100 2015"
// after d3.timeParse Tue May 31 2016 15:00:00 GMT+0100 (BST)
const parseTime = d3.timeParse('%a %b %d %H:%M:%S %Z %Y');
const bisectDate = d3.bisector(function (d) { return d.stringMonth; }).left;
const formatValue = d3.format(',.0f');
const formatCurrency = function (d) { return '$' + formatValue(d); };

// set the ranges
const setX = d3.scaleTime().range([0, settings.width]);
const setY = d3.scaleLinear().range([settings.height, 0]);

// define the area
const generateArea = d3.area()
  .x(function (d) { return setX(d.stringMonth); })
  .y0(settings.height)
  .y1(function (d) { return setY(d.earnings); })
  .curve(d3.curveCatmullRom);

// define the line
const generateLine = d3.line()
  .x(function (d) { return setX(d.stringMonth); })
  .y(function (d) { return setY(d.earnings); })
  .curve(d3.curveCatmullRom);

class Chart extends React.Component {

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
    // prepare last 9 months statement
    const userEarnings = this.props.userEarnings;
    const data = userEarnings.slice(userEarnings.length - 9, userEarnings.length);

    // format the data
    data.forEach(function (d) {
      d.stringMonth = parseTime(d.month);
      d.earnings = +d.earnings;
    });

    // sort the data
    data.sort(function (a, b) { return a.stringMonth - b.stringMonth; });

    // sorted statement goes to state
    this.setState({
      data,
    });

    // mouse event listener
    d3.select(this.rect).on('mousemove', this.mouseMove);

    // animate chart with rectClip
    d3.select(this.rectClip)
      .transition().duration(2000)
        .attr('width', settings.fullWidth);
  }

  componentWillUnmount() {
    // remove listener
    d3.select(this.rect).on('mousemove', null);
  }

  mouseOut() {
    // update style when mouse out
    d3.select(this.focus).style('display', 'none');
    d3.select(this.tooltip).style('opacity', 0);
  }

  mouseOver() {
    // update style when mouse over
    d3.select(this.focus).style('display', null);
    d3.select(this.tooltip).style('opacity', 0);
  }

  mouseMove() {
    // update style when mouse move
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
      .style('top', (setY(d.earnings) + settings.margin.top - 15) + 'px')
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
        <RelativeDiv width={settings.fullWidth} height={settings.fullHeight}>
          <StyledChartTooltip innerRef={comp => this.tooltip = comp} />
          <svg width={settings.fullWidth} height={settings.fullHeight}>
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="rgba(103, 253, 81, 0.3)" />
                <stop offset="100%" stopColor="rgba(103, 253, 81, 0.7)" />
              </linearGradient>
            </defs>
            <g transform={`translate(${settings.margin.left},${settings.margin.top})`}>
              <Area
                area={generateArea(data)}
                clipPath="clipPath"
                gradient="gradient" />
              <Line
                line={generateLine(data)}
                clipPath="clipPath" />
              <Dots
                circles={data}
                clipPath="clipPath"
                setX={setX}
                setY={setY} />
              <VerticalGrids
                grids={data}
                clipPath="clipPath"
                margin={settings.margin}
                setX={setX}
                setY={setY} />
              <VerticalGridTexts
                texts={data}
                setX={setX}
                margin={settings.margin} />
              <StyledFocus innerRef={comp => this.focus = comp}>
                <circle r="5" fill="#2dc543"></circle>
              </StyledFocus>
              <StyledTooltipRect
                width={settings.fullWidth}
                height={settings.height}
                innerRef={comp => this.rect = comp}
                onMouseOut={this.mouseOut}
                onMouseOver={this.mouseOver}
              />
              <clipPath id="clipPath">
                <StyledRectClip
                  innerRef={comp => this.rectClip = comp}
                  width="0"
                  height={settings.fullHeight}
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

export default Chart;
