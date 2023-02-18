import { lazy } from "react";
import { BaseLayout } from "../../Layout/BaseLayout";
import { RouteWrapper } from "../RouteWrapper";
import AuthRouter from "./AuthRouter";
 
const ProfileDetail = lazy(() => import("../../Pages/Home/ProfileDetails/ProfileDetail"));
const CompanyDetail = lazy(() => import("../../Pages/Home/CompanyDetails/CompanyDetail"));
const Reports = lazy(() => import("../../Pages/Home/Reports/Reports"));
const Chart = lazy(() => import("../../Components/organisms/Charts/Chart"));
const CreateReports = lazy(() => import("../../Pages/Home/Reports/CreateReports"));
const Dashboard = lazy(() => import("../../Pages/Home/Dashboard"));
const UploadFiles = lazy(() => import("../../Pages/Home/Upload File/UploadFiles"));
const CustomizeReport = lazy(() => import("../../Pages/Home/Reports/CustomizeReport"));
const GRIReport = lazy(() => import("../../Pages/Home/Reports/GRIReport"));
const SEBIReport = lazy(() => import("../../Pages/Home/Reports/SEBIReport"));


function UserRouter() {
    return (
        <>
             {/* route  Reports */}
            <RouteWrapper path="/report" component={Reports} layout={BaseLayout} />
            <RouteWrapper path="/create-report" component={CreateReports} layout={BaseLayout} />
            <RouteWrapper path="/sebl-report" component={SEBIReport} layout={BaseLayout} />
            <RouteWrapper path="/gri-report" component={GRIReport} layout={BaseLayout} />
            <RouteWrapper path="/customize-report" component={CustomizeReport} layout={BaseLayout} />

             {/* route Analytics */}
            <RouteWrapper path="/environment" component={CompanyDetail} layout={BaseLayout} />
            <RouteWrapper path="/social" component={CompanyDetail} layout={BaseLayout} />
            <RouteWrapper path="/company-details" component={CompanyDetail} layout={BaseLayout} />
            <RouteWrapper key={"2"} path="/charts" component={Chart} layout={BaseLayout} />
 
             <RouteWrapper path="/profile-details" component={ProfileDetail} layout={BaseLayout} />
        
        
            <RouteWrapper path="/upload-file" component={UploadFiles} layout={BaseLayout} />
            <RouteWrapper path="/" exact component={Dashboard} layout={BaseLayout} />
            {AuthRouter()}

        </>
    )
}

export default UserRouter;
