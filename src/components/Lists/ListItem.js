import styled from 'styled-components';
import React from 'react';
import theme from '../Theme/theme';

const ListItemStyled = styled.div`
  padding-left: 30px; padding-right: 30px;

  color: #343434;
  position: relative;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 15px 20px;
  transition: background ${props => props.theme.animations.fast} ease, color 200ms ease;
  display: flex;
  align-items: center;

  &:hover {
    background: ${props => props.hover ? props.theme.colors.primary : '#fff' };
    color: ${props => props.hover ? 'white' : '' };
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
    margin-right: 15px;
  }

  h6 {
    margin:0;
    font-size: 18px;
    line-height: normal;
    font-weight: normal;
  }

  .listWrap,
  .floater,
  .label {
    display: inline-block;
    vertical-align: middle;
  }

  .floater {
    height:1px;
  }

  .subLabel {
    font-size: 13px;
    margin:0;
    font-weight: normal;
    opacity: 0.7;
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

ListItemStyled.defaultProps = {
  theme: theme
};

export default function(props){

  function renderLeftIcon() {
    if(props.leftIcon) {
      return <span className="leftIcon">{props.leftIcon}</span>
    } else {
      return <span className="floater"></span>;
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

      {props.subText ? (
        <div className="listWrap">
          <h6>{props.label}</h6>
          <span className="subLabel">{props.subText}</span>
        </div>
      ) : (
        <h6 className="label">{props.label}</h6>
      )}

      {renderRightIcon()}
    </ListItemStyled>
  )
};
