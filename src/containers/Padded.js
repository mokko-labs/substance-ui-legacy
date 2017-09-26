import styled from 'styled-components';

const Padded = styled.div`
  margin: ${props => props.margin || 0 };
  padding:${props => props.padding || 0 };
`;

export default Padded;
