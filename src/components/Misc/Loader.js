import styled, { withTheme } from 'styled-components';
import React from 'react';
import theme from '../Theme/theme';

const Loader = (props) => {
  return (
    <span>Loading...</span>
  );
};

Loader.defaultProps = {
  theme: theme
};


export default Loader;
