import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${(props)=>props.config.fontFamily};
  font-size: ${(props)=>props.config.fontSize}em;
  font-weight: ${(props)=>props.config.fontWeight};
  line-height: ${(props)=>props.config.lineHeight}em;
  color: ${(props)=>props.config.color};
`;

const H2 = styled.h2`
  font-family: ${(props)=>props.config.fontFamily};
  font-size: ${(props)=>props.config.fontSize}em;
  font-weight: ${(props)=>props.config.fontWeight};
  line-height: ${(props)=>props.config.lineHeight}em;
  color: ${(props)=>props.config.color};
`;

const H3 = styled.h3`
  font-family: ${(props)=>props.config.fontFamily};
  font-size: ${(props)=>props.config.fontSize}em;
  font-weight: ${(props)=>props.config.fontWeight};
  line-height: ${(props)=>props.config.lineHeight}em;
  color: ${(props)=>props.config.color};
`;

const H4 = styled.h4`
  font-family: ${(props)=>props.config.fontFamily};
  font-size: ${(props)=>props.config.fontSize}em;
  font-weight: ${(props)=>props.config.fontWeight};
  line-height: ${(props)=>props.config.lineHeight}em;
  color: ${(props)=>props.config.color};
`;

const H5 = styled.h5`
  font-family: ${(props)=>props.config.fontFamily};
  font-size: ${(props)=>props.config.fontSize}em;
  font-weight: ${(props)=>props.config.fontWeight};
  line-height: ${(props)=>props.config.lineHeight}em;
  color: ${(props)=>props.config.color};
`;

const H6 = styled.h6`
  font-family: ${(props)=>props.config.fontFamily};
  font-size: ${(props)=>props.config.fontSize}em;
  font-weight: ${(props)=>props.config.fontWeight};
  line-height: ${(props)=>props.config.lineHeight}em;
  color: ${(props)=>props.config.color};
`;

const Paragraph = styled.p`
  font-family: ${(props)=>props.config.fontFamily};
  font-size: ${(props)=>props.config.fontSize}em;
  font-weight: ${(props)=>props.config.fontWeight};
  line-height: ${(props)=>props.config.lineHeight}em;
  color: ${(props)=>props.config.color};
`;



export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph
};
