import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { withTheme } from 'styled-components';
import { VictoryChart, VictoryArea, VictoryStack, VictoryScatter, VictoryTooltip } from 'victory';
import chartTheme from './chartTheme';
import { darken } from 'polished';

const StackChart = (props) => {

  const stackArea = props.data.map((data, index) => (
    <VictoryStack
      domainPadding={{ x: 0, y: 10 }}
      key={index}
    >
      <VictoryArea
        animate={props.animation}
        data={data}
        domainPadding={0}
        interpolation={props.curves ? "natural" : "linear"}
        padding={30}
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
        domainPadding={{ x: 0, y: 10 }}
        key={index}
      >
        <VictoryScatter
          animate={props.animation}
          data={data}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ fill:props.dataColors[index], strokeWidth: 0 }}
              style={{ fontSize: 10, fill: 'white' }}
            />
          }
          labels={(d) => `Y: ${d.y}`}
          size={3}
          style={{ data: { fill: "#fff", strokeWidth:2, stroke: darken(0.1, props.dataColors[index]) } }}
        />
      </VictoryStack>
    )
  );

  return (
    <VictoryChart
      height={props.height}
      padding={30}
      theme={chartTheme}
    >
      {stackArea}
      {scatter}
    </VictoryChart>
  );
};


StackChart.propTypes = {
  animation: PropTypes.object,
  curves: PropTypes.bool,
  data: PropTypes.array,
  dataColors: PropTypes.array,
  height: PropTypes.string
};


export default withTheme(StackChart);
