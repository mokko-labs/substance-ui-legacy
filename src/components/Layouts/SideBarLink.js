import styled from 'styled-components';
import theme from '../Theme/theme';


const SideBarLink = styled.div`

  a {
    text-decoration: none;
    display: block;
    font-family: ${props => props.theme.fonts.heading ? props.theme.fonts.heading : 'sans-serif'};
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
        font-size: 24px;
      }
    }
  }

  svg {
    margin-right: 10px;
    display: inline-block;
    font-size: 24px;
  }
`;


SideBarLink.defaultProps = {
  theme: theme
};


export default SideBarLink;
