import React from 'react';
import styled, { withTheme } from 'styled-components';
import { VictoryStack } from 'victory';
import chartTheme from '../chartTheme';

const ChartStack = (props) => {
  return (
    // Stuff here
    <VictoryStack>
      {props.children}
    </VictoryStack>
  );
};


export default withTheme(ChartStack);
