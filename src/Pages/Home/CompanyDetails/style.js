import styled from "styled-components";

const CompanyDetailsPage = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    position: relative;
`;


const ComapnyConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 24px;
    width: 1142px;


    @media only screen and (max-width: 1142px) {
            width: 700px;       
    }

    @media only screen and (max-width: 900px) {
        width: 500px;
    }

    @media only screen and (max-width: 700px) {
        width: 400px;
    }

    @media only screen and (max-width: 500px) {
        width: 200px;
    }

    @media only screen and (max-width: 300px) {
        width: 100px;
    }
    button{
        width: fit-content;
        height: 40px;
    }
`;

export {CompanyDetailsPage , ComapnyConatiner};