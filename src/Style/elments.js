import styled from "styled-components";

export const Form = styled.form`
box-shadow:${({ shadow }) => shadow || "  0px 3px 10px rgba(32, 32, 32, 0.1)"};
padding:${({ padding }) => padding || "2rem"};
background:${({ background }) => background || "#F8F8F8"};
border:${({ border }) => border || "1px solid #000000"};
border-radius: 20px;
margin:${({ margin }) => margin || "6rem auto auto auto"};
width:${({ width }) => width || "33%"};
display:${({ display }) => display};
flex-wrap: wrap;

grid-column-gap:${({ column }) => column}rem;
@media (min-width:800px) and (max-width:1199px) {
    width:60%
  }
  @media (min-width:350px) and (max-width:809px) {
    width:80%
  }
  `
export const TitleText = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
 font-weight: ${({ fontWeight }) => fontWeight || "600"};
font-size: ${({ fontSize }) => fontSize || "27px"};
margin: 0;
width:${({ width }) => width};
color:${({ color }) => color || "#00000"};
margin-top:${({ margin }) => margin}rem;
margin-bottom:${({ marginBottom }) => marginBottom || "2"}rem;
text-align: center;
`
export const Labels = styled.label`
  font-family: 'Inter';
  font-style: normal;
   font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color:${({ color }) => color || "#1C1C1C"};
  margin-right:${({ margin }) => margin};
  font-size:${({ fontSize }) => fontSize || "16px"};
  border-bottom:${({ border }) => border};
  padding:${({ padding }) => padding};
  margin:${({ margins }) => margins};
`
export const Span = styled.span`
  font-family: 'Inter';
  font-style: normal;
  color:${({ color }) => color || "#000000"};
  margin-right:${({ margin }) => margin};
  font-size:${({ fontSize }) => fontSize || "16px"};
  border-bottom:${({ border }) => border};
  padding:${({ padding }) => padding};
  margin:${({ margins }) => margins};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};

`
export const InputField = styled.input`
background: #FFFFFF;
border-style: solid;
border-width: ${({ borders }) => borders || "2px"};
border-color:${({ border }) => border || "#bababaa0"} ;
border-radius:${({ borderRadius }) => borderRadius || "6px"};
padding:${({ padding }) => padding || "1rem"};
width:${({ width }) => width || "90%"};
outline: none;
margin-right:${({ marginRight }) => marginRight};
margin:${({ margin }) => margin || ".6rem auto .7rem auto"};
`
export const Anckor = styled.a`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
 text-align: center;
color:${({ color }) => color};
font-size:${({ fontSize }) => fontSize || "16px"};
 text-decoration: none;
 margin-left:${({ marginLeftt }) => marginLeftt || ".3"}rem;
 font-weight: ${({ fontWeight }) => fontWeight || "600"};
`
export const ButoonLogin = styled.button`
 border-radius:${({ borderRuidus }) => borderRuidus || "6"}px;
width: ${({ width }) => width};
height: ${({ height }) => height};
margin-top: ${({ marginTop }) => marginTop || ".6"}rem;
padding: ${({ padding }) => padding || ".8"}rem;
font-size: ${({ fontSize }) => fontSize || "16"}px;
color:${({ color }) => color || "#FFFFFF"};
background: ${({ background }) => background || "#000000"};
border: none;
font-weight: ${({ fontWeight }) => fontWeight || "600"};
border:${({ border }) => border};
margin:${({ margin }) => margin};
position:${({ position }) => position};
top: ${({ top }) => top};
right: ${({ right }) => right};
cursor: pointer;
  `
export const Li = styled.li`
font-size: 22px;
line-height: 1.6;
`
export const Hr = styled.hr`
width: 100%;
`
export const P = styled.p`
 border-left: ${({ border }) => border};
padding:1rem;
 width:${({ width }) => width};
 text-align: left;
`
export const Image = styled.img`
 margin:.3rem;

`
