import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'

// import './i18n/i18n.js'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18n}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </I18nextProvider> */}
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
