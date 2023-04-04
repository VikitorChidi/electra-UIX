import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const LandingPage = Loadable(lazy(() => import('pages/LandingPage/index')));

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/session/signin',
            element: <AuthLogin />
        },
        {
            path: '/session/signup',
            element: <AuthRegister />
        },
        {
            path: '/welcome',
            element: <LandingPage />
        }
    ]
};
export default LoginRoutes;
