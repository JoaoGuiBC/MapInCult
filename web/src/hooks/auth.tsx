import React, { createContext, useCallback, useContext, useState } from 'react';
import { differenceInHours, parse, format } from 'date-fns';
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
    const tokenDate = localStorage.getItem('@MapInCult:tokenDate');

    if (!tokenDate) {
      return {} as AuthState;
    }

    const parsedDate = parse(tokenDate, 'LL/dd/yyyy/H/m', new Date());

    if (differenceInHours(Date.now(), parsedDate) >= 24) {
      localStorage.removeItem('@MapInCult:token');
      localStorage.removeItem('@MapInCult:tokenDate');
      return {} as AuthState;
    }

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

    const formatedDate = format(Date.now(), 'MM/dd/yyyy/H/m');

    localStorage.setItem('@MapInCult:token', token);
    localStorage.setItem('@MapInCult:tokenDate', formatedDate);

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
