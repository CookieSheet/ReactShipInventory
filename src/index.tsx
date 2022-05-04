import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home, Dashboard, Signin } from './components';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import { theme } from './Theme/themes';
import { ThemeProvider } from "@mui/material/styles";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
    <Router>
      <Routes>
        <Route path="/" element = {  <Home title = {"Rangers 87"}/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
