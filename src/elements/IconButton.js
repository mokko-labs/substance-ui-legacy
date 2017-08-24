import styled from 'styled-components';
import theme from '../theme';

function iconButtonColor(props) {
  var selection = props.theme.colors[props.color || 'default'];
  return `color: ${selection}`;
}

const IconButton = styled.button`
    display: inline-block;
    margin: 4px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    font-size: ${props => props.fontSize || '20px'};
    transition: all ${props => props.theme.animations.fast} ease;
    ${props => iconButtonColor(props)};

    &:hover {
      color: #333;
    }
`;



IconButton.defaultProps = {
  theme: theme
};


export default IconButton;
