import React from 'react';
import styled, { withTheme } from 'styled-components';
import { VictoryScatter, VictoryChart, VictoryArea, VictoryTooltip, VictoryLabel } from 'victory';
import chartTheme from '../chartTheme';
import {darken} from 'polished';

const AreaChart = (props) => {
  return (
    <VictoryChart
      padding={30}
      height={props.height}
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
        style={{ data: { fill: "#fff", strokeWidth:2, stroke: darken(0.2, props.chartStyle.fill)} } }
        labelComponent={
          <VictoryTooltip
            flyoutStyle={{ fill:props.chartStyle.fill, strokeWidth: 0}}
            style={{ fontSize: 10, fill: 'white' }}
          />
        }
        labels={(d) => `Y: ${d.y}`}
        size={3}
      />
    </VictoryChart>
  );
};

export default withTheme(AreaChart);
