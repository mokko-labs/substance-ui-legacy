import styled from 'styled-components';
import React from 'react';
import theme from '../theme';

const Form = styled.form`

`;

exports.Form = Form;


const Input = styled.input`
  display: block;
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
  margin-left: 0;

  &:focus {
    outline: none;
    background: #ddd;
  }
`;

exports.Input = Input;


const Label = styled.label`
  color: #333;
  font-weight: 600;
`;

exports.Label = Label;