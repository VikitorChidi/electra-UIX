// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { AuthProvider } from './contexts/JWTAuthContext';
import { CssBaseline } from '@mui/material';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <AuthProvider>
        <ThemeCustomization>
            <ScrollTop>
                <CssBaseline />
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    </AuthProvider>
    // <ThemeCustomization>
    //     <ScrollTop>
    // <CssBaseline />
    //         <Routes />
    //     </ScrollTop>
    // </ThemeCustomization>
);

export default App;
