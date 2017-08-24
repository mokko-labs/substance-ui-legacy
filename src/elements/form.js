import styled from 'styled-components';
import React from 'react';
import theme from '../theme';

const formItemStyled = styled.div`
    font-size: 26px;
    padding-left: 20px;
    width: 100px;
    height: 100px;
    background-color: 'red';

    input {
      width: 5000px;
    }
`;





export default function(props){



  return(
    <formItemStyled>
      <h3 style={{fontSize: 22, fontWeight: 'bold', marginBottom: 35}}>{props.label}</h3>
      <form>
        {props.title} <br />
        <input type={props.type} name="firstname" placeholder={props.placeholder} style={{width: 280,borderStyle: 'solid', borderRadius: 4, boxShadow: 'none', marginTop: 5, padding: 10, fontSize: 15, color: '#C2C2C2'}}   />< br/>
      </form>
    </formItemStyled>
  )
};
