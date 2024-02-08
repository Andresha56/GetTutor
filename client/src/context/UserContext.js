
import React, { useState } from 'react'
import { createContext, useContext } from 'react';
const UsersContext = createContext(null);

export function useUserContext() {
    return useContext(UsersContext);
}

function UserContext({ children }) {
    const [user, setUser] = useState("teacher");
    return (
        <UsersContext.Provider value={{ user, setUser }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UserContext