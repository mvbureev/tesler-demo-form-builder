import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/* <React.StrictMode>
</React.StrictMode> */

ReactDOM.render(
  <App
    getJsonSchemaForm={(item) => {
      console.log('getJsonSchemaForm: ', item);
    }}
    rootSchemaUi={{}}
    prefix="form-builder_"
  />,
  document.getElementById('root'),
);
