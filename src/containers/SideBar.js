import styled from 'styled-components';
import theme from '../theme';

const SideBar = styled.div`
  background: ${theme.sidebar.bg};
  min-width: 64px;
  width: 200px;
  position: fixed;
  top: 0; left: 0; bottom: 0;
  box-shadow: 0px 0px 8px #DDD;

  @media (max-width: 768px) {
    width: 64px;
  }
`;

export default SideBar;
