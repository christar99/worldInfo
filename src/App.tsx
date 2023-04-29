import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/common/styles/GlobalStyle';
import { getCookie, setCookie } from '@/common/Cookies';
import { lightTheme, darkTheme } from '@/common/styles/theme';
import { useAppDispatch, useAppSelector } from '@/store/index';
import { worldInfoApi } from '@/api/worldInfoApi';
import Sidebar from '@/components/units/Sidebar';
import TopMenu from '@/components/units/TopMenu';
import Loading from '@/components/units/Loading';
import Router from '@/common/Router';
import ApiPending from '@/components/common/ApiPending';

const AppContainer = styled.div<{ openMenu: boolean }>`
	width: 100vw;
	padding: 25px 100px 25px ${(props) => (props.openMenu ? '375px' : '100px')};
`;

const App: React.FC = () => {
	const [firstLoad, setFirstLoad] = useState<string>(getCookie('firstLoad'));
	const dispatch = useAppDispatch();
	const darkMode = useAppSelector((state) => state.common.darkMode);
	const openMenu = useAppSelector((state) => state.common.openMenu);
	const apiPending = useAppSelector((state) => state.common.apiPending);

	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;

	useEffect(() => {
		dispatch(worldInfoApi.getNationsList());
		if (firstLoad !== 'Y') {
			setTimeout(() => {
				setCookie('firstLoad', 'Y');
				setFirstLoad(getCookie('firstLoad'));
			}, 1500);
		}
	}, [firstLoad, dispatch]);

	useEffect(() => {
		const qs = queryString.parse(window.location.search);

		if (pathname === '/' && Object.keys(qs).length === 0) {
			navigate('?page=1&limit=10');
		}
	}, [pathname, navigate]);

	return (
		<>
			{firstLoad !== 'Y' ? (
				<Loading />
			) : (
				<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
					<GlobalStyle />
					<Sidebar />
					<TopMenu />
					{apiPending && <ApiPending />}

					<AppContainer openMenu={openMenu}>
						<Router />
					</AppContainer>
				</ThemeProvider>
			)}
		</>
	);
};

export default App;
