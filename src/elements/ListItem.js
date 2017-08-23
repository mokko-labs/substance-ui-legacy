import styled from 'styled-components';
import React from 'react';

const ListItemStyled = styled.li`
  border-bottom: 1px solid #DADADA;
  padding-left: 30px; padding-right: 30px;

  position: relative;

  &:hover {
    background: linear-gradient(322.34deg, #FFCF00 0%, #FFB100 100%);
    color: white;
  }

  .leftIcon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
  }

  .avatar {
    width: 52px;
    height: 52px;
    border-radius: 26px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
  }

  .label {
    padding-top: 26px;
    padding-bottom: 26px;

    display: inline-block;
    vertical-align: middle;
  }


  .rightIcon {
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;


export default function(props){

  function renderLeftIcon() {
    if(props.leftIcon) {
      return <span className="leftIcon">{props.leftIcon}</span>
    } else {
      return null;
    }
  }

  function renderAvatar() {

    if(props.avatar) {
      return <img className="avatar" src={props.avatar}></img>
    } else {
      return null;
    }

  }

  function renderRightIcon() {
    if(props.rightIcon) {
      return <span className="rightIcon">{props.rightIcon}</span>
    } else {
      return null;
    }
  }

  return (
    <ListItemStyled>
      {renderLeftIcon()}
      {renderAvatar()}
      <span className="label">{props.label}</span>
      {renderRightIcon()}
    </ListItemStyled>
  )
};
