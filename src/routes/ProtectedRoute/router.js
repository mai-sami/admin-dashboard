import { lazy } from "react";
import { BaseLayout } from "../../Layout/BaseLayout";
import NotFound from "../../Pages/NotFound";
import AuthRouter from "./AuthRouter";


const Login = lazy(() => import("../../Pages/Auth/Login"));
const Register = lazy(() => import("../../Pages/Auth/Register"));
const ForgetPassword = lazy(() => import("../../Pages/Auth/ForgetPassword"));
const Verification = lazy(() => import("../../Pages/Auth/Verification"));
const Verified = lazy(() => import("../../Pages/Auth/Verified"));


const TransfareList = lazy(() => import("../../Components/organisms/TransfareList/TransfareList"));
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


export const router = [
    {
        element: <AuthRouter />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/forgetpassword", element: <ForgetPassword /> },
            { path: "/verified", element: <Verified /> },
            { path: "/verification", element: <Verification /> },
        ]
    },
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            { path: "", element: <Dashboard /> },
            { path: "company-details", element: <CompanyDetail /> },
            { path: "profile-details", element: <ProfileDetail /> },
            { path: "create-report", element: <TransfareList /> },
            {
                path: "report",
                children: [
                    { index: true, element: <Reports /> },

                    { path: "my-report", element: <MyReport /> },
                    { path: "sebl-report", element: <SEBIReport /> },
                    { path: "sebl-report", element: <CreateReports /> },
                    { path: "gri-report", element: <GRIReport /> },
                    { path: "customize-report", element: <CustomizeReport /> },
                ],
            },
            {
                path: "analytics",
                children: [
                    { index: true, element: <Analytics /> },
                    { path: "social", element: <Analytics /> },
                    { path: "analytics", element: <Analytics /> },
                    { path: "governance", element: <Analytics /> },
                ],
            },
            { path: "upload-file", element: <UploadFiles /> },
        ],
    },
    { path: "*", element: <NotFound /> },
];