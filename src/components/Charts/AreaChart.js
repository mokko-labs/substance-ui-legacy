import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { VictoryScatter, VictoryChart, VictoryArea, VictoryTooltip } from 'victory';
import chartTheme from './chartTheme';
import { darken } from 'polished';
import theme from '../../theme';

const AreaChart = (props) => {
  return (
    <VictoryChart
      height={props.height}
      padding={30}
      theme={chartTheme}
    >
      <VictoryArea
        animate={props.animation}
        data={props.data}
        domainPadding={0}
        padding={30}
        style={{
          data: props.chartStyle
        }}
      />
      <VictoryScatter
        animate={props.animation}
        data={props.data}
        labelComponent={
          <VictoryTooltip
            flyoutStyle={{ fill:props.chartStyle.fill, strokeWidth: 0 }}
            style={{ fontSize: 10, fill: 'white' }}
          />
        }
        labels={(d) => `Y: ${d.y}`}
        size={3}
        style={{ data: { fill: "#fff", strokeWidth:2, stroke: darken(0.2, props.chartStyle.fill) } }}
      />
    </VictoryChart>
  );
};

AreaChart.defaultProps = {
  theme: theme
};

AreaChart.propTypes = {
  animation: PropTypes.object,
  chartStyle: PropTypes.object,
  data: PropTypes.array,
  height: PropTypes.number,
};

export default AreaChart;
