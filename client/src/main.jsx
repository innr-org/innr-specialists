import React from 'react'
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client'
import store from "./app/store.js";
import App from './App.jsx'
import './index.css'
import 'react-notifications-component/dist/theme.css'
import 'animate.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
)
