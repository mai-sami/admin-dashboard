import styled from "styled-components";

const CompanyDetails = styled.div`
    width: 100%;
    border: 1px solid #989898;
    border-radius: 10px;    
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    

    #AllDetails{
        display: flex;
        flex-direction: column;
        gap: 23px;
        margin: 32px 38px;
    }
`; 


const SingleDetail = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-weight: 400;
        font-size: 15px;
        line-height: 150%;
        color: #000000;
    }

    #loremDetail{
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        color: #000000;
    }
`;

export {CompanyDetails , SingleDetail};