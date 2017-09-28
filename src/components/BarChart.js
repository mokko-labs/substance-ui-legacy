import React from 'react';
import styled, { withTheme } from 'styled-components';
import { VictoryChart, VictoryBar, VictoryTooltip } from 'victory';
import chartTheme from '../chartTheme';
import {darken} from 'polished';

const BarChart = (props) => {
  return (
    <VictoryChart
      domainPadding={{x: [props.chartStyle.width*2, props.chartStyle.width*2], y: 0}}
      padding={30}
      height={props.height}
      theme={chartTheme}>
      <VictoryBar
        animate={props.animation}
        data={props.data}
        labelComponent={
          <VictoryTooltip
            flyoutStyle={{ fill:props.chartStyle.fill, strokeWidth: 0}}
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


export default withTheme(BarChart);
