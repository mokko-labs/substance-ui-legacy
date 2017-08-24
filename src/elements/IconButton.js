import styled from 'styled-components';
import theme from '../theme';

function iconButtonColor(props) {
  var selection = theme.button[props.color || 'default'];
  return `color: ${selection.bg}`;
}

export default styled.button`
    display: inline-block;
    margin: 4px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    font-size: ${props => props.fontSize || '20px'};
    transition: all ${theme.animations.fast}ms ease;
    ${props => iconButtonColor(props)};

    &:hover {
      color: #333;
    }
`;
