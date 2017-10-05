import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { withTheme } from 'styled-components';
import { VictoryChart, VictoryBar, VictoryTooltip } from 'victory';
import chartTheme from './chartTheme';

const BarChart = (props) => {
  return (
    <VictoryChart
      domainPadding={{ x: [props.chartStyle.width*2, props.chartStyle.width*2], y: 0 }}
      height={props.height}
      padding={30}
      theme={chartTheme}
    >
      <VictoryBar
        animate={props.animation}
        data={props.data}
        labelComponent={
          <VictoryTooltip
            flyoutStyle={{ fill:props.chartStyle.fill, strokeWidth: 0 }}
            style={{ fontSize: 10, fill: 'white' }}
          />
        }
        labels={(d) => `Y: ${d.y}`}
        padding={30}
        style={{
          data: props.chartStyle
        }}
      />
    </VictoryChart>
  );
};

BarChart.propTypes = {
  animation: PropTypes.object,
  chartStyle: PropTypes.object,
  data: PropTypes.array,
  height: PropTypes.string
};


export default withTheme(BarChart);
