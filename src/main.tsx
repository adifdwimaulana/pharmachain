import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AgentProvider } from '@ic-reactor/react';
import { ServiceContextProvider } from '@/contexts/service-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AgentProvider withProcessEnv>
      <ServiceContextProvider>
        <App />
      </ServiceContextProvider>
    </AgentProvider>
  </React.StrictMode>,
);
