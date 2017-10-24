import React from 'react';
import PropTypes from 'prop-types'; // ES6
import styled from 'styled-components';
import theme from '../../theme';

const Input = styled.input `
	padding: 1em;
  border: 1px solid #C2C2C2;
  display: block;
  width: 100%;
  font-size: 0.9em;
  box-sizing: border-box;
	border-radius: 3px;
	outline: 0;
	color: ${props => props.theme.colors.heading
  ? props.theme.colors.heading
  : '#000'};

	&.error,
	&.error:focus {
		border-color: ${props => props.theme.colors.error };
	}

	&.success,
	&.success:focus {
		border-color: ${props => props.theme.colors.success };
	}

	&:focus {
		border-color:${props => props.theme.colors.primary
    ? props.theme.colors.primary
    : '#000'};
	}

  ::-webkit-input-placeholder {
    color:#afafaf;
  }
  :-moz-placeholder           {
    color:#afafaf;
  }
  ::-moz-placeholder          {
    color:#afafaf;
  }
  :-ms-input-placeholder      {
    color:#afafaf;
  }
`;

const IconWrap = styled.span `
	display: inline-block;
	position: absolute;
	left:10px;
	top:0;
	top:50%;
	transform: translate(0, -50%);

	&>* {
		width: 1.1em;
		height: 1em;
		opacity: 0.5;
		font-size: 1.2em;
	}
`;

const InputWrap = styled.div `
	position: relative;


	input {
		padding-left: ${props => props.icon
		? '40px'
		: '1em'};
	}

  label {
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 7px;
		pointer-events: none;
    display: block;
		display: block;
		position: absolute;
		font-size: ${props => props.icon
	  ? '0.9em'
	  : '1em'};
		left: ${props => {
			if(props.icon) {
				return '40px'
			} else if (props.floating) {
				return '1em'
			} else {
				return '0'
			};
		}};

		top:${props => props.floating
    ? '50%'
    : 0};
		color:${props => props.floating
    ? '#afafaf'
    : '#000'};
		transform: ${props => props.floating
    ? 'translate(0, -50%)'
    : 'translate(0, -120%)'};
		transition: 300ms all ease-out;
  }

	input:focus + label,
	&.hasValue input + label {
		top:0;
		left:0;
		opacity: 1;
		color: ${props => props.floating
    ? props.theme.colors.primary
    : '#000'};
		padding-left: 0;
		font-size: 1em;
		transform: translate(0, -120%);
	}
`;

class TextInput extends React.Component {

  constructor() {
    super();
    this.state = {
    };

  }

  render() {
    return (
      <InputWrap error={this.props.error} className={this.props.value
        ? 'hasValue'
        : 'hasNoValue'} icon={this.props.icon
        ? true
        : false} floating={this.props.floating}>
        {this.props.icon
          ? <IconWrap>{this.props.icon}</IconWrap>
          : null}
        <Input className={this.props.error ? 'error' : this.props.success ? 'success' : ''} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder
          ? this.props.placeholder
          : ''} type={this.props.type}/> {this.props.label
          ? <label>{this.props.label}</label>
          : null}
      </InputWrap>
    );
  }

};

Input.defaultProps = {
  theme: theme
};
IconWrap.defaultProps = {
  theme: theme
};
InputWrap.defaultProps = {
  theme: theme
};

TextInput.propTypes = {
  floating: PropTypes.bool,
  icon: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default TextInput;
