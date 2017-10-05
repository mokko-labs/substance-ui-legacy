
import styled from 'styled-components';
import {darken, lighten, transparentize} from 'polished';
import theme from '../theme';
import {adjustHue} from 'polished';

function makeGradient(color) {
  return `linear-gradient(322.34deg, ${color} 0%, ${adjustHue(-10, color)} 100%)`;
}

function outlineButton(props) {

  var selection = props.theme.colors[props.color || 'default'];

  var hoverMethod = `
   &:hover {
     opacity: 0.8;
   }
  `;

  if(props.alt) {
    hoverMethod = `
    &:hover {
      background: ${selection};
      color: white;
    }
    `
  }

  return `
    border: 2px solid ${selection};
    background: transparent;
    color: ${selection};
    ${hoverMethod};
    &:active {
      opacity: 0.33;
    }
  `
}

function buttonColoring(props) {

  if(props.outline) {
    return outlineButton(props);
  }

  var selection = props.theme.colors[props.color || 'default'];

  return `
    background: ${makeGradient(selection)};
    color: ${selection == 'default' ? '#333' : 'white'};

    &:hover {
      opacity: 0.8;
    };

    &:active {
      opacity: 0.33;
    }
  `
}

const buttonSizing = function(props) {

  var sizingData = {
    small: {
      v: 12,
      h: 30,
      fontSize: 12
    },
    default: {
      v: 15,
      h: 30,
      fontSize: 14
    },
    large: {
      v: 17,
      h: 50,
      fontSize: 16
    }
  }

  var selection = sizingData[props.size || 'default'];


  if(props.outline) {
    selection.v -= 2;
    selection.h -= 2;
  }


  return `
    font-size: ${selection.fontSize}px;
    padding: ${selection.v}px ${selection.h}px ;
  `
}

const Button = styled.button`
  border: none;
  box-sizing: border-box;
  outline:0;
  cursor: pointer;
  margin: 4px;
  ${props => buttonColoring(props)};
  ${props => buttonSizing(props)};
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  ${props => props.disabled ? `
    pointer-events: none;
    background: #dedede;
    cursor: not-allowed` : ``
  }
`;


Button.defaultProps = {
  theme: theme
}

export default Button;
