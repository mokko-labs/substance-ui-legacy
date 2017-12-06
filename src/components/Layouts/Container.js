import styled from 'styled-components';

const Container = styled.div`
  max-width: ${props => props.fluid ? '100%' : '1700px' || '100%' };
  padding-left: 70px;
  padding-right: 70px;
  margin: ${props => props.left ? '0' : '0 auto'};
`;

export default Container;
