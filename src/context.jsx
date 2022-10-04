import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
    // Using axios, installed through npm
    const fetchMeals = async(url) => {
        try {
            // destructure the data from the response
            const {data} = await axios(url)
            console.log(data)
        }
        catch (error) {
            console.log(error.response)
        }
    }
    
    // React fetch API
    // const fetchData = async() => {
    //     try {
    //         const response = await fetch(allMealsUrl)
    //         const data = await response.json()
    //         const random = await fetch(randomMealUrl)
    //         const randomData = await random.json()
    //         console.log(data)
    //         console.log(randomData)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => { 
        fetchMeals(allMealsUrl)
    }, [])
    
    return <AppContext.Provider value={{name: 'kevin', role:'student'}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
