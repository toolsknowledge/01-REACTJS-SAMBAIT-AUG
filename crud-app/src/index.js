import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer";
import deleteReducer from "./reducer/deleteReducer";
import insertReducer from './reducer/insertReducer';
import updateReducer from './reducer/updateReducer';
const store = createStore(combineReducers({
  reducer1 : reducer,
  reducer2 : deleteReducer,
  reducer3 : insertReducer,
  reducer4 : updateReducer
}),applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
