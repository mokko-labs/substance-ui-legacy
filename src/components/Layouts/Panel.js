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
  text-align:${props => props.alignment || 'left' };

  padding-top:${props => props.paddingTop|| 0 }px;
  padding-right:${props => props.paddingRight || 0 }px;
  padding-bottom:${props => props.paddingBottom || 0 }px;
  padding-left:${props => props.paddingLeft || 0 }px;
  ${props => props.padding ? `
        padding:`+ props.padding +`px;
    ` : ''
  };
  box-sizing: border-box;


  ${props => props.childSpacing ? `
      &>* {
        margin: 0 0 ` + props.childSpacing + `px 0 !important;
      }
      &>*:last-child {
        margin-bottom: 0;
      }
    ` : ''
  };


`;

/* Responsive Bit (based on SideBar)

@media (max-width: 768px) {
  margin-left: 64px;
}

*/

export default Panel;
