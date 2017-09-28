import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin: ${(props)=>props.gutter ? (-props.gutter+'px 0 0 ' + -props.gutter+'px') : 0};

  &>div {
     padding: ${(props)=>props.gutter ? (props.gutter+'px 0 0 ' + props.gutter+'px') : 0};
     margin-bottom: ${(props)=> props.gutter/2+'px' || 0};
  }
`;

const Column = styled.div`
  flex: 1;
  display: ${(props)=>props.matchHeight ? 'flex' : 'block'};
`;


/* Responsive Bit (based on SideBar)

@media (max-width: 768px) {
  margin-left: 64px;
}
*/
export {
  Row,
  Column
};
