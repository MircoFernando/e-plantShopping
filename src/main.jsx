import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* This allows all components in the app to access and interact with the global state managed by Redux. */}
    <App />
    </Provider>
  </React.StrictMode>,
)
