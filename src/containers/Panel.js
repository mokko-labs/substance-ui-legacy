import styled from 'styled-components';

const Panel = styled.div`
  max-width:${props => props.maxWidth ? props.maxWidth : '100%'};
  display: flex;
  width:100%;
  margin: 0 auto;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

/* Responsive Bit (based on SideBar)

@media (max-width: 768px) {
  margin-left: 64px;
}

*/

export default Panel;
