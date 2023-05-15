import React from 'react'
import ReactDOM from 'react-dom/client'

import { I18nextProvider } from "react-i18next";
import i18n from "./modules/i18n";

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
