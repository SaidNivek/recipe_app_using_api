import React, { useContext, useEffect } from 'react'

const AppContext = React.createContext()

const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'

const AppProvider = ({ children }) => {

    const fetchData = async() => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            const data = await response.json()
            const random = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            const randomData = await random.json()
            console.log(data)
            console.log(randomData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { 
        fetchData()
    }, [])
    
    return <AppContext.Provider value={{name: 'kevin', role:'student'}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
