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

  padding-top:${props => props.top * 10 || 0 }px;
  padding-right:${props => props.right * 10 || 0 }px;
  padding-bottom:${props => props.bottom * 10 || 0 }px;
  padding-left:${props => props.left * 10 || 0 }px;
  ${props => props.all ? `
        padding:`+ props.all * 10 +`px;
    ` : ''
  };
  box-sizing: border-box;

  @media (max-width: 1400px) {
    padding:${props => props.all * 10 || 0 }px;
    padding-top:${props => props.top * 7 || 0 }px;
    padding-right:${props => props.right * 7 || 0 }px;
    padding-bottom:${props => props.bottom * 7 || 0 }px;
    padding-left:${props => props.left * 7 || 0 }px;
  }

  @media (max-width: 1100px) {
    padding:${props => props.all * 10 || 0 }px;
    padding-top:${props => props.top * 5 || 0 }px;
    padding-right:${props => props.right * 5 || 0 }px;
    padding-bottom:${props => props.bottom * 5 || 0 }px;
    padding-left:${props => props.left * 5 || 0 }px;
  }

  &>* {
    margin: 0 0 ${props => props.childSpacing+'px' || 0 } 0;
  }

  ${props => props.disabled ? `
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
