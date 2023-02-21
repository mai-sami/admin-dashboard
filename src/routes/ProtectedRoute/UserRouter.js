import { lazy } from "react";
import { BaseLayout } from "../../Layout/BaseLayout";
import { RouteWrapper } from "../RouteWrapper";
import Login from "../../Pages/Auth/Login";
import { Redirect } from "react-router-dom";
import AuthRouter from "./AuthRouter";


const ProfileDetail = lazy(() => import("../../Pages/Home/ProfileDetails/ProfileDetail"));
const CompanyDetail = lazy(() => import("../../Pages/Home/CompanyDetails/CompanyDetail"));
const Reports = lazy(() => import("../../Pages/Home/Reports/Reports"));
const CreateReports = lazy(() => import("../../Pages/Home/Reports/CreateReports"));
const Dashboard = lazy(() => import("../../Pages/Home/Dashboard"));
const UploadFiles = lazy(() => import("../../Pages/Home/Upload File/UploadFiles"));
const CustomizeReport = lazy(() => import("../../Pages/Home/Reports/CustomizeReport"));
const GRIReport = lazy(() => import("../../Pages/Home/Reports/GRIReport"));
const SEBIReport = lazy(() => import("../../Pages/Home/Reports/SEBIReport"));
const MyReport = lazy(() => import("../../Pages/Home/Reports/MyReport"));
const Analytics = lazy(() => import("../../Pages/Home/Analytics/Analytics"));
// const NotFound = lazy(() => import("../../Pages/NotFound"));


function UserRouter() {
  const TokenAuth = localStorage.getItem('token')
  if (!TokenAuth) return <Redirect to={'/login'} />
  return (
    <>
      {/* Reports route */}
      <RouteWrapper path="/report" component={Reports} layout={BaseLayout} />
      <RouteWrapper path="/my-report" component={MyReport} layout={BaseLayout} />
      <RouteWrapper path="/create-report" component={CreateReports} layout={BaseLayout} />
      <RouteWrapper path="/sebl-report" component={SEBIReport} layout={BaseLayout} />
      <RouteWrapper path="/gri-report" component={GRIReport} layout={BaseLayout} />
      <RouteWrapper path="/customize-report" component={CustomizeReport} layout={BaseLayout} />
      {/*Analytics route */}
      <RouteWrapper path="/environment" component={Analytics} layout={BaseLayout} />
      <RouteWrapper path="/social" component={Analytics} layout={BaseLayout} />
      <RouteWrapper path="/governance" component={Analytics} layout={BaseLayout} />
      <RouteWrapper path="/analytics" component={Analytics} layout={BaseLayout} />

      <RouteWrapper path="/company-details" component={CompanyDetail} layout={BaseLayout} />
      <RouteWrapper path="/profile-details" component={ProfileDetail} layout={BaseLayout} />
      <RouteWrapper path="/upload-file" component={UploadFiles} layout={BaseLayout} />


      <RouteWrapper path="/" exact component={Dashboard} layout={BaseLayout} />
      {/* <Route path={"*"}>
        <NotFound />
      </Route> */}

    </>
  )

}

export default UserRouter;



