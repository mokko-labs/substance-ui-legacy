import styled from 'styled-components/native';

const Card = styled.View`
  width: 100%;
  background: '#fff';
  padding: ${props => props.padded ? '20px' : '0'};
  border-radius: ${props => props.square ? '0' : '6px'};
`;

export default Card;
