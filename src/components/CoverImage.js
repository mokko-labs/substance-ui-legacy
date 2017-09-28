import styled from 'styled-components'

const CoverImage = styled.div`
  width: 100%;
  height:100%;
  left:0;
  top:0;
  background-image:${props => 'url('+props.url+')' || 'none'};
  background-position: ${props => props.position || 'center'};
  background-size: cover;
  position: relative;
  z-index: 0;
`;

export default CoverImage
