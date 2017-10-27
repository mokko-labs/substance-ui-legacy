import styled from 'styled-components';

const Padded = styled.div`
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
`;

export default Padded;
