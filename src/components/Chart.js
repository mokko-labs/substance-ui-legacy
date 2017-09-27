import React from 'react';
import styled, { withTheme } from 'styled-components';
import { VictoryChart } from 'victory';
import chartTheme from '../chartTheme';

const Chart = (props) => {
  return (
    <VictoryChart theme={chartTheme} padding={props.padding} height={props.height}>
      {props.children}
    </VictoryChart>
  );
};


export default withTheme(Chart);
