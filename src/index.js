import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navbar, Footer, BackGround} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

// ROUTER
import { Router, Route, Switch, useHistory, BrowserRouter } from 'react-router-dom';

// REDUX
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import MainView from './views/MainView';
import LoginView from './views/LoginView';
import SearchView from "./views/SearchView";
import CarrierView from "./views/CarrierView";
import MapView from './views/MapView';
import store from './store'

import setAuthorizationToken from './authorization'
import {LOGIN_SUCCESS} from './store/modules/auth/authtypes'

const customHistory = createBrowserHistory();

// 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.
if (localStorage.token) {
    setAuthorizationToken(localStorage.token)
    let userData = localStorage.getItem('user_data') == null ? null : JSON.parse(localStorage.getItem('user_data'))
    store.dispatch({ type: LOGIN_SUCCESS, payload: userData }) //provided he has a valid token
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={customHistory}>
                <>
                    <BackGround>
                        <Navbar />
                        <Switch>
                            <Route path="/login" component={LoginView}></Route>
                            <Route path="/search" component={SearchView}></Route>
                            <Route path="/carrier" component={CarrierView}></Route>
                            <Route path="/map" component={MapView}></Route>
                            <Route exact path="/" component={MainView}></Route>
                        </Switch>
                    </BackGround>
                    <Footer />
                </>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
