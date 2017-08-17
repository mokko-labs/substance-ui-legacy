import styled from 'styled-components';
import theme from '../theme';

const defaultShadow = '0 12px 26px 5px rgba(202, 202, 202, 0.32)';

const Card = styled.div`
  background: white;
  padding: 20px;
  margin: 20px;
  box-shadow: ${props => props.static ? defaultShadow : '0 4px 10px rgba(202, 202, 202, 0.64)'};
  border-radius: ${props => props.square ? '0' : '6px'};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${defaultShadow};
  }
`;


export default Card;
