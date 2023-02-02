import React from 'react';
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: logoutHandler
});
export default AuthContext;