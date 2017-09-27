import React from 'react';
import styled, { withTheme } from 'styled-components';
import { VictoryChart, VictoryBar } from 'victory';
import chartTheme from '../chartTheme';

const BarChart = (props) => {
  return (
    // Stuff here
      <VictoryBar
        domainPadding={20}
        animate={props.animation}
        data={props.data}
        padding={20}
      />
  );
};


export default withTheme(BarChart);
