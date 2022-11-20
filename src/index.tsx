import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/lo';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

dayjs.extend(isLeapYear);
dayjs.locale('ko');

root.render(
	<Provider store={store}>
		<Router basename="/world-info">
			<App />
		</Router>
	</Provider>
);

reportWebVitals();
