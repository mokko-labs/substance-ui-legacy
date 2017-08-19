import React, {Component} from 'react';
import styled from 'styled-components';
import theme from '../theme';


const NavLink = styled.div`

  a {
    text-decoration: none;
    display: block;
    padding: 0 30px;
    line-height: 64px;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    transition: all 100ms ease;
    &:hover {
      color: #333;
    }
    &.active {
      color: #000;
      font-weight: 800;
      font-size: 24px;
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

export default NavLink;
