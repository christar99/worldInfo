import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { BrowserRouter as Router } from 'react-router-dom';
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/lo";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

dayjs.extend(isLeapYear);
dayjs.locale('ko');

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
