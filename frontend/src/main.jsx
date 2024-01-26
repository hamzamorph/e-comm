import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import store from './store/index.js'
import { Provider } from 'react-redux'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer/>
      <App />
    </React.StrictMode>
  </Provider>
)
