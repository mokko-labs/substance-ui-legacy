import React from 'react';
import PropTypes from 'prop-types'; // ES6
import styled, { withTheme } from 'styled-components';


const Input = styled.input`
	padding: 1em;
  border: 1px solid #C2C2C2;
  display: block;
  width: 100%;
  font-size: 0.9em;
  box-sizing: border-box;
	border-radius: 3px;

  ::-webkit-input-placeholder {
    color:#ccc;
  }
  :-moz-placeholder           {
    color:#ccc;
  }
  ::-moz-placeholder          {
    color:#ccc;
  }
  :-ms-input-placeholder      {
    color:#ccc;
  }
`;

const LabelWrap = styled.div`
  label {
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 7px;
    display: block;
  }
`;

const FloatingLabelWrap = styled.div`
  label {
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 7px;
    display: block;
  }
`;


const TextInput = (props) => {

  if (props.label) {
    return (
      <LabelWrap>
        <label>{props.label}</label>
        <Input
          placeholder={props.placeholder}
          type={props.type}
        />
      </LabelWrap>
    );
  }

  if (props.floating && props.label) {
    return (
      <FloatingLabelWrap>
        <label>{props.label}</label>
        <Input
          placeholder={props.placeholder}
          type={props.type}
        />
      </FloatingLabelWrap>
    );
  }

  return <Input
    placeholder={props.placeholder}
    type={props.type}
  />
};

TextInput.propTypes = {
  label: PropTypes.string,
  floating: PropTypes.bool
};



export default withTheme(TextInput);
