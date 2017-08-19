import styled from 'styled-components';
import theme from '../theme';

const defaultShadow = '0 12px 26px 5px rgba(202, 202, 202, 0.32)';

const Card = styled.div`
  background: ${theme.card.bg};
  padding: ${props => props.padded ? '20px' : '0'};
  box-shadow: ${props => props.interactive ? '0 4px 10px rgba(202, 202, 202, 0.64)' : defaultShadow};
  border-radius: ${props => props.square ? '0' : '6px'};
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    box-shadow: ${defaultShadow};
  }
`;


export default Card;
