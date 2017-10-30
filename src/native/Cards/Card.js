import styled from 'styled-components/native';
import theme from '../../components/Theme/theme';

const defaultShadow = '0 12px 26px 5px rgba(202, 202, 202, 0.32)';

const Card = styled.View`
  width: 100%;
  background: ${props => props.theme.card.bg};
  padding: ${props => props.padded ? '20px' : '0'};
  border-radius: ${props => props.square ? '0' : '6px'};
`;

Card.defaultProps = {
  theme: theme
};

export default Card;
