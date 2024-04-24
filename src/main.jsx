import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <Routes />
    </Provider>
  </React.StrictMode>,
)
