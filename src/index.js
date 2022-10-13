import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import List from './pages/List';
import Header from './components/Header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/list' element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
