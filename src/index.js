import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { createRoot } from 'react-dom/client';

import 'antd/dist/antd.min.css';
import './style/style.css';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
// ReactDOM.render(
//     <BasicRouter/>,
//   document.getElementById('root')
// );