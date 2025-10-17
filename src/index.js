import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 👈 Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* BrowserRouter is required to enable routing throughout your app */}
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </React.StrictMode>
);