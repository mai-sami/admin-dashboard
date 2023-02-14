import styled from "styled-components";

export const Flex =styled.div`
display: flex;
align-items: center;
justify-content:${({ justifyContent }) => justifyContent || "center"};
margin-left: ${({ marginLeft }) => marginLeft }rem;

`