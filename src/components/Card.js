import styled, { withTheme } from 'styled-components';
import theme from '../theme';

const defaultShadow = '0 12px 26px 5px rgba(202, 202, 202, 0.32)';

const Card = styled.div`
  width: 100%;
  background: ${props => props.theme.card.bg};
  padding: ${props => props.padded ? '20px' : '0'};
  box-shadow: ${props => props.interactive ? '0 4px 10px rgba(202, 202, 202, 0.64)' : defaultShadow};
  border-radius: ${props => props.square ? '0' : '6px'};
  transition: box-shadow ${props => props.theme.animations.slow} ease;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: ${defaultShadow};
  }
`;

Card.defaultProps = {
  theme: theme
}

export default withTheme(Card);
