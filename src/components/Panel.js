import styled from 'styled-components';

const Panel = styled.div`
  max-width:${props => props.maxWidth ? props.maxWidth : '100%'};
  display: ${props => props.flex ? 'flex' : 'block'};
  width:100%;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  margin: ${props => props.margin+'px' || 0 };
  padding: ${props => props.padding+'px' || 0 };
  text-align:${props => props.alignment || 'left' };
`;

/* Responsive Bit (based on SideBar)

@media (max-width: 768px) {
  margin-left: 64px;
}

*/

export default Panel;
