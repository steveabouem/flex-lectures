import React from 'react';
import ReactDOM from 'react-dom/client';
import RegularAccountSection from './regular/RegularAccountSection';
import AccountSection from './typed/AccountSection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RegularAccountSection />
    <AccountSection />
  </React.StrictMode>
);
