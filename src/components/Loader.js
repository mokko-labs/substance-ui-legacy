import styled, { withTheme } from 'styled-components';
import React from 'react';
import Halogen from 'halogen';

const Loader = (props) => {

  if (props.type === 'Pulse') {
    return (
      <Halogen.PulseLoader color={props.color ? props.color : props.theme.colors.primary} {...props} />
    );
  }

  return (
    <Halogen.ClipLoader color={props.color ? props.color : props.theme.colors.primary} {...props} />
  );
};


export default withTheme(Loader);
