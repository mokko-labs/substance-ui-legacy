import styled from 'styled-components';
import _ from 'lodash'


const Split = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  margin: ${(props)=>props.gutter ? (-props.gutter+'px 0 0 ' + -props.gutter+'px') : 0};

  &>div {
    box-sizing: border-box;
    position: relative;
    padding: ${(props)=>props.gutter ? (props.gutter+'px 0 0 ' + props.gutter+'px') : 0};
    margin-bottom: ${(props)=> props.gutter+'px' || 0};
    @media (max-width: 1200px) {
      flex: 100%;
    }
  }
  &>div:nth-child(1) {
    flex: ${(props)=>props.ratio ? (100/_.sum(props.ratio)) * props.ratio[0]+'%' : 1};
    @media (max-width: 1200px) {
      flex: 100%;
    }
  }
  &>div:nth-child(2) {
    flex: ${(props)=>props.ratio ? (100/_.sum(props.ratio)) * props.ratio[1]+'%' : 1};
    @media (max-width: 1200px) {
      flex: 100%;
    }
  }
  &>div:nth-child(3) {
    flex: ${(props)=>props.ratio ? (100/_.sum(props.ratio)) * props.ratio[2]+'%' : 1};
    @media (max-width: 1200px) {
      flex: 100%;
    }
  }
`;

const SplitColumn = styled.div`
  display: ${(props)=>props.matchHeight ? 'flex' : 'block'};
`;


/* Responsive Bit (based on SideBar)

@media (max-width: 768px) {
  margin-left: 64px;
}
*/
export {
  Split,
  SplitColumn
};
