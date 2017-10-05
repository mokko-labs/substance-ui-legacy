import styled, { withTheme } from 'styled-components';

const SideBar = styled.div`
  background: ${props => props.theme.sidebar.bg};
  min-width: 64px;
  width: ${props => props.theme.sidebar.width +'px' || '200px'};
  position: fixed;
  top: 0; left: 0; bottom: 0;
  min-height: 100vh;
  box-shadow: ${props => props.shadow ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'};
`;


export default withTheme(SideBar);