import "@babel/polyfill";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import "./style/scss/index.scss";
import App from "./App/App";
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom"




const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
   <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
      </Provider>
)

ReactDOM.render(app, document.getElementById("root"));

   M.AutoInit();
   
