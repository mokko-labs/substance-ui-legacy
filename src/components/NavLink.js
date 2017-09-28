import React, {Component} from 'react';
import styled, { withTheme } from 'styled-components';


const NavLink = styled.div`

  a {
    text-decoration: none;
    display: block;
    font-family: ${props => props.theme.fonts.heading};
    padding:${props => props.theme.sidebar.links.padding || '0 30px'};
    letter-spacing: 0.8px;
    line-height:${props => props.theme.sidebar.links.lineHeight || '64px'};
    color: ${props => props.theme.sidebar.links.color || '#666'};
    font-weight: ${props => props.theme.sidebar.links.fontWeight || '400'};
    font-size: ${props => props.theme.sidebar.links.fontSize+'px' || '16px'};;
    cursor: pointer;
    transition: all 100ms ease;
    &:hover {
      color: #333;
    }
    &.active {
      color:  ${props => props.theme.sidebar.links.activeColor || '#666'};;
      font-weight: ${props => props.theme.sidebar.links.activeFontWeight || '800'};
      font-size:  ${props => props.theme.sidebar.links.activeFontSize+'px' || '24'};;
      svg {
        font-size: 24px;  // Do not scale the SVG.
      }
    }
  }

    svg {
      margin-right: 10px;
      display: inline-block;
      font-size: 24px;
    }



`;

/* Responsive Bit: based on SideBar

@media (max-width: 768px) {

  a {
    padding: 20px 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }


  svg {
    margin-right: 0;
  }
}

*/
export default withTheme(NavLink);
