import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

// JSX'ler tıpkı HTML tagları gibi kullanılabilir.
// Component => HTML elementi gibi kullanırken isimler büyük harfle başlamalı
root.render(<App></App>);

reportWebVitals();
