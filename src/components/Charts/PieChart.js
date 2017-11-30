import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { VictoryPie, VictoryLabel } from 'victory';
import chartTheme from './chartTheme';
import theme from '../Theme/theme';

const PieChart = (props) => {
  return (
    <VictoryPie
      animate={props.animation}
      colorScale={props.dataColors}
      data={props.data}
      domainPadding={0}
      height={props.height}
      innerRadius={props.innerRadius}
      labelComponent={<VictoryLabel />}
      labelRadius={104}
      labels={(d) => d.x+' : '+d.y}
      padding={30}
      style={{ labels: { fontSize: 9 } }}
      theme={chartTheme}
      width={props.width}
    />

  );
};

PieChart.propTypes = {
  animation: PropTypes.object,
  data: PropTypes.array,
  dataColors: PropTypes.array,
  height: PropTypes.number,
  innerRadius: PropTypes.number,
  width: PropTypes.string,
};

PieChart.defaultProps = {
  theme: theme
};


export default PieChart;
