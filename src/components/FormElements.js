import styled from 'styled-components';



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



const Label = styled.label`
  color: #333;
  font-weight: 600;
`;
