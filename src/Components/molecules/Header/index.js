import React from 'react'
import { useLocation } from 'react-router-dom';
import Title from '../../atoms/Titles/Title';
import { Nav } from './style';
import Logo from '../Logo/index'
function Index() {
    const location = useLocation();
    const getCurrentTitle = () => {
        switch (location.pathname) {
            case "/company-details":
                return "Company Details";
            case "/profile-details":
                return "Profile details";
            case "/report":
                return "Report";
            case "/upload-file":
                return "Upload File";
            case "/charts":
                return "Charts";
            case "/sebl-report":
                return "SEBI Report";
            case "/gri-report":
                return "GRI Report";
            case "/customize-report":
                return "Customize Report";
            case "/create-report":
                return "My Report";
            case "/environment":
                return "Environment";
            case "/social":
                return "Social";
            case "/governance":
                return "Governance";
                case "/":
                return "Dashboard";
                case "/transfer-list":
                    return "Transfer List";
                
            default:
                return "Add Name of Page in another case";
        }
    }
    return (
        <Nav>
            <Title name={getCurrentTitle()}
                color={"#FFFFFF"}
                fontSize={"22px"}
                fontWeight={"500"}
                marginBottom={"0"} />
            <Logo />
        </Nav>
    )
}

export default Index
