import React, { useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="helo">
        {children}
    </AppContext.Provider>
}

export default { AppContext, AppProvider }