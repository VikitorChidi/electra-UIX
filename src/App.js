// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { AuthProvider } from './contexts/JWTAuthContext';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <AuthProvider>
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    </AuthProvider>
    // <ThemeCustomization>
    //     <ScrollTop>
    //         <Routes />
    //     </ScrollTop>
    // </ThemeCustomization>
);

export default App;
