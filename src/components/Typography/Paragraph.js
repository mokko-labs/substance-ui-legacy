import styled from 'styled-components';
import theme from '../Theme/theme';

const Paragraph = styled.p`
  font-family: ${props => props.theme.fonts.paragraph || 'sans-serif'};
  color:${props => props.color ? props.color : props.theme.colors.paragraph || '#000'};
  margin:${props => props.margin || '0px'};
  padding:0;
  font-weight:${props => props.weight || 'normal'};
  letter-spacing: 0.7px;
  font-size: ${props => {
    switch (props.size){
      case 'x-small':
        return '0.750em';
      case 'small':
        return '0.875em';
      case 'medium':
        return '1.250em';
      case 'large':
        return '1.375em';
      case 'x-large':
        return '1.875em';
      case 'xx-large':
        return '2.5em';
      default:
        return '1em';
    }
  }};
  line-height:  1.5;
`;


Paragraph.defaultProps = {
  theme: theme
};


export default Paragraph;
