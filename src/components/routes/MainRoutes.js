import React, { Children } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import EditRole from '../../views/AdminTool/Role/EditRole'
import Analytics from '../../views/Analytics/Analytics'
import Products from '../../views/Products/Products'
import GetProductById from '../../views/Products/GetProductById'
import Facebook from '../../views/Source/Facebook/Facebook'
// import UpdatewebsitesLead from '../../views/Source/WebsiteLead/UpdateWebsitesLead'
// import RejectModal from '../../views/Source/subManualData/RejectLeadModal'
// import LinkdineLead from '../../views/Source/LinkdinLead/linkdin'
// import InstagramLead from '../../views/Source/InstagramLead/instagram'
// import JustdialLead from '../../views/Source/JustdialLead/justdialLead'
const Dashboard = React.lazy(() => import('../../views/Dashboard/index'))
const Role = React.lazy(() => import('../../views/AdminTool/Role/Roles'))
// const Plan = React.lazy(() => import('../../views/AdminTool/Plan'))
const Company = React.lazy(() => import('../../views/AdminTool/Company/Company'))
const User = React.lazy(() => import('../../views/AdminTool/Users/User'))
const AllLeads = React.lazy(()=>import ('../../views/GetAllLeads/AllLeads'))
const ViewDetails = React.lazy(()=>import ('../../views/GetAllLeads/Viewdetails/ViewDetails'))
const ManualData = React.lazy(()=>import("../../views/Source/ManualData/ManualData"))
// const Custom = React.lazy(() => import('../../views/Source/ManualData'))
// const UpdateLead = React.lazy(() => import('../../views/Source/subManualData/UpdateLead'))
// const Facebook = React.lazy(() => import('../../views/Source/FacebookLead/getFacebookLead'))
// const WebsitesLead = React.lazy(() => import('../../views/Source/WebsiteLead/WebsiteLeadDetails'))
// const  GoogleAds = React.lazy(() => import('../../views/Source/GoogleAds/googleAds'))
// const SubMenual = React.lazy(() => import('../../views/Source/subManualData/subManualDetails'))
const Profile = React.lazy(() => import('../../../src/views/UserProfile/index'));
// const Invoice = React.lazy(()=> import('../../views/Invoice/invoice') )
// const AddInvoice = React.lazy(()=> import('../../views/Invoice/addInvoice') )
const Report = React.lazy(()=> import('../../views/Reports/index') )
const MainRoutes = {
        path: "/",
        element: <DefaultLayout />,
        children: [
                {
                        path: '/',
                        permissions: [{ label: "Read", value: "read" },],
                        element: <Dashboard />
                },
                {
                        path: '/reports',
                        permissions: [{ label: "Read", value: "read" }, { label: "Create", value: "create" }, { label: "Update", value: "update" }, { label: "Delete", value: "delete" }],
                        element: <Report />
                },
                {
                        path: '/company',
                        // permissions: [{ label: "Read", value: "read" }, { label: "Create", value: "create" }, { label: "Update", value: "update" }, { label: "Delete", value: "delete" }, { label: "Root", value: "root" }],
                        permissions: [{ label: "Read", value: "read" }],
                        element: <Company />
                },
                {
                        path: '/role',
                        // permissions: [{ label: "Read", value: "read" }, { label: "Create", value: "create" }, { label: "Update", value: "update" }, { label: "Delete", value: "delete" }],
                        permissions: [{ label: "Read", value: "read" }],
                        element: <Role />
                },
                {
                        path: '/role/update/:id',
                        // permissions: [{ label: "Read", value: "read" }, { label: "Create", value: "create" }, { label: "Update", value: "update" }, { label: "Delete", value: "delete" }],
                        permissions: [{ label: "Read", value: "read" }],
                        element: <EditRole/>
                },
                {
                        path: '/user',
                        // permissions: [{ label: "Read", value: "read" }, { label: "Create", value: "create" }, { label: "Update", value: "update" }, { label: "Delete", value: "delete" }],
                        permissions: [{ label: "Read", value: "read" }],
                        element: <User />
                },
                {
                        path: '/all-leads',
                        permissions: [{ label: "Read", value: "read" },],
                        element: <AllLeads />
                },
                {
                        path: '/leads/:id',
                        permissions: [{ label: "Read", value: "read" },],
                        element: <ViewDetails />
                },
                {
                        path: '/analytics',
                        permissions: [{ label: "Read", value: "read" },],
                        element: <Analytics />
                },
                {
                        path: '/products',
                        permissions: [{ label: "Read", value: "read" }],
                        element: <Products />
                },
                {
                        path: '/product/:id',
                        permissions: [{ label: "Read", value: "read" }],
                        element: < GetProductById />
                },

               
                {
                        path: '/manual-data',
                        permissions: [{ label: "Read", value: "read" }],
                        element: <ManualData />
                },

                  {

                        path: '/facebook',
                        permissions: [{ label: "Read", value: "read" }],
                        element: <Facebook />

                },
                // //websites
                // {

                //         path: 'source/website',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: <WebsitesLead />

                // },
                // {

                //         path: 'source/website/:id',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: <UpdatewebsitesLead />

                // },
                // {

                //         path: 'source/custom',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: <Custom />
                // },
                // {

                //         path: 'source/linkedin',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: <LinkdineLead />
                // },
                // {
                //         path: '/source/instagram',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: <InstagramLead />
                // },
                // {
                //         path: '/source/justdial',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: <JustdialLead/>
                // },
                // {

                //         path: '/source/google-ads',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: <GoogleAds/>
                // },
                // {
                //         path: 'source/custom/update/:id',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: <UpdateLead />
                // },
                // {
                //         path: 'source/custom/:id',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: < SubMenual />
                // },
                {
                        path: '/profile',
                        permissions: [{ label: "Read", value: "read" }],
                        element: < Profile />
                },
                // {
                //         path: '/invoice/add/:id',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: < AddInvoice />
                // },
                // {
                //         path: '/invoice/:id',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: < InvoiceDetails />
                // },
                // {
                //         path: '/invoice/get/:id',
                //         permissions: [{ label: "Read", value: "read" }],
                //         element: < Invoice />
                // },
         
        ]
}

export default MainRoutes;

