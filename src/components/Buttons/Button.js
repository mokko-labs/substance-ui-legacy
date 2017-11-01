import React from 'react';
import styled from 'styled-components';
import {darken, lighten, transparentize} from 'polished';
import theme from '../Theme/theme';
import {adjustHue} from 'polished';
import { ClipLoader } from 'react-spinners';



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
    background: ${ (props.color === 'success' || props.color === 'warning' || props.color === 'error') ? selection : makeGradient(selection)};
    color: ${selection === 'default' ? '#333' : 'white'};

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
  };

  var selection = sizingData[props.size || 'default'];


  if (props.outline) {
    selection.v -= 2;
    selection.h -= 2;
  }


  return `
    font-size: ${selection.fontSize}px;
    padding: ${selection.v}px ${selection.h}px ;
  `;
};

const ButtonBase = styled.button`
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
    opacity:0.6;
    cursor: not-allowed` : ``
};
`;


class Button extends React.Component {


  constructor() {
    super();
    this.state = {
      loading: false
    };
  }


  componentWillMount() {
    if(this.props.isLoading) {
      this.setState({
        loading:true
      })
    }
  }

  componentWillReceiveProps(newProps) {
  }

  clickHandle() {
    if(this.props.debounce) {
      this.setState({
        loading: true
      })
      setTimeout(()=>{
        this.setState({
          loading: false
        })
      },this.props.debounce*1000)
    }
  }

  render() {
    return (
      <span style={{'position': 'relative'}}>
        {
          this.state.loading ? (
            <ButtonBase disabled size={this.props.size} alt={this.props.alt} outline={this.props.outline} color={this.props.color} theme={this.props.theme}>
              <div style={{'position':'absolute', 'top':'50%', 'left' : '50%', marginLeft:'-10px', marginTop: '-10px'}}>
                <ClipLoader
                      color={this.props.color}
                      size={22}
                      loading={this.state.loading}
                    />
              </div>
              <div style={{'opacity' : 0}}>
                {this.props.children}
              </div>
            </ButtonBase>
          )  : (
            <ButtonBase onClick={()=> this.clickHandle()} size={this.props.size} alt={this.props.alt} outline={this.props.outline} color={this.props.color} theme={this.props.theme}>
              {this.props.children}
            </ButtonBase>
          )
        }
      </span>
    )
  }


};

Button.defaultProps = {
  theme: theme
};

ButtonBase.defaultProps = {
  theme: theme
};


export default Button;
