import { Provider } from 'react-redux';

import { App } from 'components/App';
import { store } from 'store';
import './tailwind.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);