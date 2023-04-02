import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App/App';
import { uiReducer } from './reducers/uiReducer';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    , document.getElementById('root')
  </Provider>
);

const store = createStore(uiReducer);
