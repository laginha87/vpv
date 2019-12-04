import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './components/App'
import { store } from './store'
import { DataProvider } from './components/common/DataProvider'
import { setup } from './model/setup'
// import './tailwind.css';

(async function () {
  const dataStore = await setup()

  ReactDOM.render(
    <Provider store={store}>
      <DataProvider value={{ store: dataStore }}>
        <App />
      </DataProvider>
    </Provider>,
    document.getElementById('root')
  )
})()
