import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux'
import {store} from './redux-files/store.js'
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// ReactDOM.render(
//   <React.StrictMode>
//   <App />,
//  </React.StrictMode>
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}></Provider>
//     <App />
//   </Provider>
//   </React.StrictMode>
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


