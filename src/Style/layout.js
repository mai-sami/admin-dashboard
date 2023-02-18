import styled from "styled-components";

export const Flex =styled.div`
display: flex;
align-items:${({ alignItems }) => alignItems || "center"};
justify-content:${({ justifyContent }) => justifyContent || "center"};
margin-left: ${({ marginLeft }) => marginLeft }rem;
flex-direction:${({ flexDirection }) => flexDirection };
flex-wrap:${({ flexWrap }) => flexWrap };
width:${({ width }) => width};
margin: ${({ margin }) => margin};

`
export const Div = styled.div`
width:${({ width }) => width || "33%"};
align-items:${({ alignItems }) => alignItems || "center"};
justify-content:${({ justifyContent }) => justifyContent || "center"} ;
display:${({ display }) => display};
@media (min-width:800px) and (max-width:1199px) {
    width:60%
  }
  @media (min-width:350px) and (max-width:809px) {
    width:80%
  }`

  export const DivElements = styled.div`
  line-height: ${({ LineHeight }) => LineHeight};

  `

  