import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
}

interface signInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  token: string;
  signIn(credentials: signInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@MapInCult:token');

    if (token) {
      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token } = response.data;

    localStorage.setItem('@MapInCult:token', token);

    setData({ token });
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
