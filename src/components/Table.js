import styled from 'styled-components'
import theme from '../theme';


function hoverBehaviour(props) {
  if(!props.hover) {
    return null;
  }

  return `tr {
    &:hover {
      background: ${theme.colors.primary};

      td {
        color: white;
      }
    }
  }`
}

exports.Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  tbody {
    tr:nth-child(even) {
      ${props => props.striped ? 'background: #f0f0f0' : null };
    }

    ${props => hoverBehaviour(props)};

  }

`;

exports.TableHead = styled.thead`
  font-weight: 600;
  ${props => props.color ? 'background: ' + theme.colors[props.color] : null };

  td {
    ${props => props.color ? 'color: white' : null };
  }
`;

exports.TableBody = styled.tbody`


`;

exports.TableRow = styled.tr`

  transition: background 200ms ease, color 200ms ease;

  border-bottom: 1px solid #DADADA;

`;

exports.TableCell = styled.td`

  padding-left: 30px; padding-right: 30px;

  color: #343434;
  position: relative;
  font-size: 16px;
  padding-top: 24px;
  padding-bottom: 24px;

`;
