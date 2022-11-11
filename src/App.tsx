import { useEffect, useState } from 'react';
import GlobalStyle from "common/styles/GlobalStyle";
import { getCookie, setCookie } from "common/Cookies";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "common/styles/theme";
import { useAppDispatch, useAppSelector } from 'store/index';
import { worldInfo_api } from 'api/worldInfo_api';
import Sidebar from "components/units/Sidebar";
import TopMenu from "components/units/TopMenu";
import Loading from "components/units/Loading";
import Router from 'common/Router';


const App: React.FC = () => {
    const darkMode = useAppSelector(state => state.common.darkMode);

    const [firstLoad, setFirstLoad] = useState<string>(getCookie('firstLoad'));
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(worldInfo_api.getNationsList());
        if(firstLoad !== 'Y') {
            setTimeout(() => {
                setCookie('firstLoad', 'Y');
                setFirstLoad(getCookie('firstLoad'));
            }, 1500);
        }
    }, [firstLoad, dispatch]);

    return (
        <>
            {firstLoad !== 'Y' ? <Loading />
            : <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
                <GlobalStyle />
                <Sidebar />
                <TopMenu />

                <Router />
            </ThemeProvider>}
        </>
    );
};

export default App;
