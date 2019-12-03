import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './components/App'
import { store } from './store'
import { DataProvider } from './components/common/DataProvider'
// import './tailwind.css';

ReactDOM.render(
  <Provider store={store}>
    <DataProvider>
      <App />
    </DataProvider>
  </Provider>,
  document.getElementById('root')
)
