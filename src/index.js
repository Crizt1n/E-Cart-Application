import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* provider tag is used to make store globally accessible */}
 <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer position='bottom-center' theme='colored' autoClose={1000}/>
      </BrowserRouter>
 </Provider>
  </React.StrictMode>
);


