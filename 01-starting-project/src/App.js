import React, {useState, useEffect, useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext, {AuthContextProvider} from "./context/auth-context";

function App() {
    const isLoggedIn = useContext(AuthContext).isLoggedIn;
    const logoutHandler = useContext(AuthContext).onLogout;
  return (
        <AuthContextProvider>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login/>}
                {isLoggedIn && <Home/>}
            </main>
        </AuthContextProvider>
  );
}

export default App;
