import React from 'react';
import styled, { withTheme } from 'styled-components';
import { VictoryChart, VictoryArea, VictoryStack, VictoryScatter, VictoryTooltip } from 'victory';
import chartTheme from '../chartTheme';
import {darken} from 'polished';

const StackChart = (props) => {

  const stackArea = props.data.map((data, index) =>
    (
      <VictoryStack
        key={index}
        domainPadding={{x: 0, y: 10}}
      >
        <VictoryArea
          animate={props.animation}
          data={data}
          domainPadding={0}
          padding={30}
          interpolation={props.curves ? "natural" : "linear"}
          style={{
            data: {
              fill: props.dataColors[index],
              fillOpacity: 0.9,
              strokeWidth: 0,
              stroke: darken(0.2, props.dataColors[index])
            }
          }}
        />

    </VictoryStack>
    )
  );

  const scatter = props.data.map((data, index) =>
    (
      <VictoryStack
        key={index}
        domainPadding={{x: 0, y: 10}}
      >
        <VictoryScatter
          animate={props.animation}
          data={data}
          style={{ data: { fill: "#fff", strokeWidth:2, stroke: darken(0.1, props.dataColors[index])} } }
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ fill:props.dataColors[index], strokeWidth: 0}}
              style={{ fontSize: 10, fill: 'white' }}
            />
          }
          labels={(d) => `Y: ${d.y}`}
          size={3}
        />
    </VictoryStack>
    )
  );




  return (
    <VictoryChart
      height={props.height}
      theme={chartTheme}
      padding={30}>
      {stackArea}
      {scatter}
    </VictoryChart>
  );
};

export default withTheme(StackChart);
