import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware , compose} from "redux"; 
import RootReducer from './redux/reducers/RootReducer';
import {Provider} from "react-redux"
import thunk from "redux-thunk" 
import {BrowserRouter as Router} from "react-router-dom"

const composeEnhacner = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(
  RootReducer,  
  composeEnhacner(applyMiddleware(thunk) )
  ); 

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
