import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Redux/store';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </Provider>,
);
