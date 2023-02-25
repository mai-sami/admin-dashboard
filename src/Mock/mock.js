import * as yup from "yup";
import chart1 from '../assets/chart1.png'
import chart2 from '../assets/chart2.png'
import chart3 from '../assets/chart3.png'
import chart4 from '../assets/Group 17.png'

const LoginDataFeild = [
    { text: "Email ID", type: "email", name: "email", placeholder: "Enter Email ID", yup: yup.string().required("Please enter your email").email("Please enter a valid email") },
    { text: "Password", type: "password", name: "password", placeholder: "Enter password", yup: yup.string().required("Please enter a password").min(5) },
]
const RegisterDataFeild = [
    { text: "Name", type: "text", name: "name", placeholder: "Enter Name", yup: yup.string().required("Please enter your name") },
    { text: "Email ID", type: "email", name: "email", placeholder: "Enter Email ID", yup: yup.string().required("Please enter your email").email("Please enter a valid email") },
    { text: "Password", type: "password", name: "password", placeholder: "Enter password", yup: yup.string().required("Please enter a password").min(5) },
]
const ForgetPasswordFeild = [
     { text: "Email ID", type: "email", name: "email", placeholder: "Enter Email ID", yup: yup.string().required("Please enter your email").email("Please enter a valid email") },
 ]
const CompanyDetailsData = [
    { id: 0, title: "Name", info: "Lorem ipsum" },
    { id: 1, title: "test1", info: "Lorem ipsum" },
    { id: 2, title: "test2", info: "Lorem ipsum" },
    { id: 3, title: "test3", info: "Lorem ipsum" },
    { id: 4, title: "test4", info: "Lorem ipsum" },
    { id: 5, title: "test5", info: "Lorem ipsum" },
    { id: 6, title: "test6", info: "Lorem ipsum" }
];
const DataCreatFeildProfile = [
    { text: "Name", name: "Test", placeholder: "Enter name", yup: yup.string().required("Please enter a name").min(3) },
    { text: "Test1", name: "Test1", placeholder: "Enter Test1", yup: yup.string().required("Please enter a name").min(3) },
    { text: "Test2", name: "Test2", placeholder: "Enter Test2", yup: yup.string().required("Please enter a name").min(3) },
    { text: "Test3", name: "Test3", placeholder: "Enter Test3", yup: yup.string().required("Please enter a name").min(3) },
    { text: "Test4", name: "Test4", placeholder: "Enter Test4", yup: yup.string().required("Please enter a name").min(3) },
    { text: "Test5", name: "Test5", placeholder: "Enter Test5", yup: yup.string().required("Please enter a name").min(3) },
    { text: "Test6", name: "Test6", placeholder: "Enter Test6", yup: yup.string().required("Please enter a name").min(3) },
    { text: "Test7", name: "Test7", placeholder: "Enter Test7", yup: yup.string().required("Please enter a name").min(3) },
    { text: "Test8", name: "Test8", placeholder: "Enter Test8", yup: yup.string().required("Please enter a name").min(3) },
]
const ReportsDataFeildManual = [
    { text: "Report", name: "Report", placeholder: "Enter Report", yup: yup.string().required("Please enter a  Report").min(3) },
    { text: "Report1", name: "Report1", placeholder: "Enter Report1", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report2", name: "Report2", placeholder: "Enter Report2", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report3", name: "Report3", placeholder: "Enter Report3", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report4", name: "Report4", placeholder: "Enter Report4", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report5", name: "Report5", placeholder: "Enter Report5", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report6", name: "Report6", placeholder: "Enter Report6", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report7", name: "Report7", placeholder: "Enter Report7", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report8", name: "Report8", placeholder: "Enter Report8", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report9", name: "Report9", placeholder: "Enter Report9", yup: yup.string().required("Please enter a Report").min(3) },
];
const CreateReportsDataFeilds = [
    { text: "Report", name: "Report", placeholder: "Enter Report", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report1", name: "Report1", placeholder: "Enter Report1", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report2", name: "Report2", placeholder: "Enter Report2", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report3", name: "Report3", placeholder: "Enter Report3", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report4", name: "Report4", placeholder: "Enter Report4", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report5", name: "Report5", placeholder: "Enter Report5", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report6", name: "Report6", placeholder: "Enter Report6", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report7", name: "Report7", placeholder: "Enter Report7", yup: yup.string().required("Please enter a Report").min(3) },
    { text: "Report8", name: "Report8", placeholder: "Enter Report8", yup: yup.string().required("Please enter a Report").min(3) },
]
const DataSidebar = [
    { name: "Dashboard", link: "/" },
    { name: "Company details", link: "/company-details" },
    { name: "Data upload", link: "/upload-file" },
]
const ListReports = [
    { name: "SEBI report", link: "sebl-report" },
    { name: "GRI report", link: "gri-report" },
    { name: "Customize report", link: "customize-report" },
]
const ListReportSidebar = [
    { name: "My Report", link: "report/my-report" },
]
const ListAnalytics = [
    { name: "Environment", link: "analytics/analytics" },
    { name: "Social", link: "analytics/social" },
    { name: "Governance", link: "analytics/governance" },
]
const ListData = [
    { name: "Company Details" },
    { name: "Products/Services" },
    { name: "Operations" },
    { name: "Employees" },
    { name: "Holding, Subsidiary and Associate ..." },
    { name: "CSR File" },
    { name: "Transparency and Disclosures ..." },
]

const ListDatas = [
    "Corporate Identity Number (CIN) of the Company", "Name of the comapny",
    "Year of incorporation", "Registered office address", "Corporate address",
    "Email", "	Telephone", "	Website", "Financial year for reporting is being done",
    "	Whether shares listed on recognized Stock Exchange(s):", "Authorised Capital	"
    , "Paid Up Capital"]

const DashboardCharts=[
  {  name:"Chart1",image:chart1},
  {  name:"Chart2",image:chart2},
  {  name:"Chart3",image:chart3},
]
const AnalyticsCharts=[
    {  name:"Chart1",image:chart1},
    {  name:"Chart2",image:chart4},
    {  name:"Chart3",image:chart3},
  ]
// Table Data Page
const HeaderTable = ["Report1", "Report2", "Report3", "Report4", "Report5", "Report6", "Actions"]
const TableDataBody = [
    { Report1: "lorem ipsum", Report2: "lorem ipsum", Report3: "lorem ipsum", Report4: "lorem ipsum", Report5: "lorem ipsum", Report6: "lorem ipsum" },
    { Report1: "lorem ipsum", Report2: "lorem ipsum", Report3: "lorem ipsum", Report4: "lorem ipsum", Report5: "lorem ipsum", Report6: "lorem ipsum" },
    { Report1: "lorem ipsum", Report2: "lorem ipsum", Report3: "lorem ipsum", Report4: "lorem ipsum", Report5: "lorem ipsum", Report6: "lorem ipsum" },
    { Report1: "lorem ipsum", Report2: "lorem ipsum", Report3: "lorem ipsum", Report4: "lorem ipsum", Report5: "lorem ipsum", Report6: "lorem ipsum" },
    { Report1: "lorem ipsum", Report2: "lorem ipsum", Report3: "lorem ipsum", Report4: "lorem ipsum", Report5: "lorem ipsum", Report6: "lorem ipsum" },
    { Report1: "lorem ipsum", Report2: "lorem ipsum", Report3: "lorem ipsum", Report4: "lorem ipsum", Report5: "lorem ipsum", Report6: "lorem ipsum" },
    { Report1: "lorem ipsum", Report2: "lorem ipsum", Report3: "lorem ipsum", Report4: "lorem ipsum", Report5: "lorem ipsum", Report6: "lorem ipsum" },
    { Report1: "lorem ipsum", Report2: "lorem ipsum", Report3: "lorem ipsum", Report4: "lorem ipsum", Report5: "lorem ipsum", Report6: "lorem ipsum" },
]

export {
    DataSidebar,DashboardCharts,AnalyticsCharts, RegisterDataFeild, LoginDataFeild, CompanyDetailsData,ForgetPasswordFeild,
    DataCreatFeildProfile, ListAnalytics, ListReports, ListData, ReportsDataFeildManual,
    CreateReportsDataFeilds, ListDatas, ListReportSidebar, TableDataBody, HeaderTable
};