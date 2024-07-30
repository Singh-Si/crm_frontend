import { exact } from 'prop-types';
import AuthLayout from '../../layout/AuthLayout';
import Login from '../../components/Authentication/Login';
import UnAuthorised from '../../components/Authentication/Page404';
import ForgotPassword from '../../components/Authentication/ForgotPassword';
import OTP from '../../components/Authentication/SubmitOtp';

import { useSelector } from 'react-redux';
import ResetPassword from '../Authentication/ResetPassword';

const AuthRoutes = {
    path: '/user',
    // element: <AuthLayout />,
    children: [
        {
            path: "/user/login",
            element: <Login />,
           
        },
        {
            path: "/user/page404",
            element: <UnAuthorised/>
        },
        {
            path: "/user/forget-password",
            element: <ForgotPassword/>
        },
        {
            path: "/user/otp",
            element: <OTP/>
        },
        {
            path: "/user/reset-password",
            element: <ResetPassword/>
        },
    ]
};

export default AuthRoutes;