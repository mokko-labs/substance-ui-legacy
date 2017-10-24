import styled from 'styled-components';
import theme from '../../theme';

const MainPanel = styled.div`
  background-color: ${props => props.backgroundColor || '#fff' };
  min-height: 100vh;
  margin-left: ${props => props.theme.sidebar.width+'px' || '200px' };
`;

MainPanel.defaultProps = {
  theme: theme
};

export default MainPanel;
