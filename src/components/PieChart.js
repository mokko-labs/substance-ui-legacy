import React from 'react';
import styled, { withTheme } from 'styled-components';
import { VictoryPie, VictoryChart, VictoryLabel } from 'victory';
import chartTheme from '../chartTheme';
import {darken} from 'polished';

const PieChart = (props) => {
  return (

      <VictoryPie
        theme={chartTheme}
        height={props.height}
        width={props.width}
        animate={props.animation}
        data={props.data}
        innerRadius={props.innerRadius}
        domainPadding={0}
        padding={30}
        labels={(d) => d.x+' : '+d.y}
        labelComponent={<VictoryLabel />}
        colorScale={props.dataColors}
        labelRadius={104}
        style={{ labels: { fontSize: 9 } }}
      />

  );
};

export default withTheme(PieChart);
