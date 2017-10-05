import styled, { withTheme } from 'styled-components';

const MainPanel = styled.div`
  margin-left: ${props => props.theme.sidebar.width +'px' || '200px'};
  background-color: ${props => props.backgroundColor || '#fff' };
  min-height: 100vh;
`;


export default withTheme(MainPanel);
