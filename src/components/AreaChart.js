import React from 'react';
import styled, { withTheme } from 'styled-components';
import { VictoryChart, VictoryArea } from 'victory';
import chartTheme from '../chartTheme';

const AreaChart = (props) => {
  return (
    // Stuff here
      <VictoryArea
        padding={20}
        animate={props.animation}
        data={props.data}
      />
  );
};


export default withTheme(AreaChart);
