import React from 'react';

import GlobalStyle from './styles/global';

import Dashboard from './pages/Dashboard';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

const App: React.FC = () => (
  <AuthProvider>
    <ToastProvider>
      <Dashboard />
      <GlobalStyle />
    </ToastProvider>
  </AuthProvider>
);

export default App;
