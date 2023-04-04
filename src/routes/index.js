import { useRoutes } from 'react-router-dom';
import LoginRoutes from '../pages/authentication/loginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, LoginRoutes]);
}
