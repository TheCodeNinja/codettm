import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ token: null, isAuthenticated: false });

  useEffect(() => {
    // On mount, check if the user is authenticated (e.g., by verifying the token)
    axios.get('/api/check-auth', { withCredentials: true })
      .then(response => {
        if (response.data.isAuthenticated) {
          setAuthState({ token: response.data.token, isAuthenticated: true });
        }
      })
      .catch(() => {
        setAuthState({ token: null, isAuthenticated: false });
      });
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password }, { withCredentials: true });
      setAuthState({ token: response.data.token, isAuthenticated: true });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    // Clear the auth state and optionally inform the backend
    setAuthState({ token: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;