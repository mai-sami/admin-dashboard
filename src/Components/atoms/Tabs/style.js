import styled from "styled-components";

export const Box = styled.div`
background:${({ background }) => background||"#EDEDED"};
border-radius:  ${({ borderRadius }) => borderRadius||"6px"};
 padding: 1.3rem;
margin: ${({ margin }) => margin||"1rem"};
display: flex;
justify-content: space-between;
border:${({ border }) => border||"1px solid #000000"};
height:${({ height }) => height};
width:${({ width }) => width||"100%"};
font-weight: 500;
font-size: 18px;
cursor: pointer;
`