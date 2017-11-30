import styled, { withTheme } from 'styled-components';
import React from 'react';
import theme from '../Theme/theme';
import { ClipLoader } from 'react-spinners';

const Loader = (props) => {
  return (
    <ClipLoader
          color={props.theme.colors.primary}
          loading={true}
        />
  )
};

Loader.defaultProps = {
  theme: theme
};


export default Loader;
