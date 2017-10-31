import styled from 'styled-components';
import theme from '../Theme/theme';


const Menu = styled.ul`
  margin:0;
  padding: 0;
  list-style: none;
  display: inline-block;
  a {
    font-family: ${props => props.theme.fonts.heading ? props.theme.fonts.heading : 'sans-serif'};
    text-decoration: none;
    cursor: pointer;
    display: block;
    color: ${props => props.itemColor || props.theme.colors.heading};
    font-size: ${props => props.fontSize+'px' || '16px'};

    &.active {
      color: ${props => props.activeColor || props.theme.colors.primary};
      font-size: ${props => props.activeFontSize+'px' || '16px'};
      font-weight: ${props => props.activeWeight || 'bold'};

      svg {
        color: ${props => props.activeColor || props.theme.colors.primary};
      }
    }
  }

  &>li {
    display: ${props => props.layout === 'vertical' ? 'block' : 'inline-block' };
    text-decoration: none;
    transition: all 100ms ease;
    padding-bottom:${props => props.layout === 'vertical' ? (props.itemSpacing ? props.itemSpacing+'px' : '20px') : '0px' };
    padding-right:${props => props.layout !== 'vertical' ? (props.itemSpacing ? props.itemSpacing+'px' : '20px') : '0px' };
    &:hover {
      color: #333;
    }
  }

  svg {
    margin-right: 8px;
    color: ${props => props.itemColor || props.theme.colors.heading};
    display: inline-block;
    font-size: ${props => props.fontSize+'px' || '16px'};
  }
`;


const MenuItem = styled.li`
  svg {
    margin-right: 10px;
    display: inline-block;
    font-size: 24px;
  }
`;


MenuItem.defaultProps = {
  theme: theme
};

Menu.defaultProps = {
  theme: theme
};


export {
  Menu,
  MenuItem
};
