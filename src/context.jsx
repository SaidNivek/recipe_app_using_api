import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
    // Setup a loading variable useState hooke
    const [loading, setLoading] = useState(false)
    // Get the data from the fetchMeals function
    const [meals, setMeals] = useState([])
    // Create a variable to contain the search term, to be used in the Search component
    const [searchTerm, setSearchTerm] = useState('')

    // Using axios, installed through npm
    const fetchMeals = async(url) => {
        // setLoading to true, to display "Loading..." in the app
        setLoading(true)
        try {
            // destructure the data from the response
            const {data} = await axios(url)
            // useEffect to setMeals to the data.meals, returned from the axios fetch
            // Check to see if any data is returned, if data is returned, setMeals to the returned data
            if(data.meals) {
                setMeals(data.meals)
            }
            else {
                setMeals([])
            }
        }
        catch (error) {
            console.log(error.response)
        }
        // When the meals get set, setLoading to false to display the meals
        setLoading(false)
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
        fetchMeals(allMealsUrl + searchTerm)
    }, [searchTerm])


    // Pass in the global values, in this case it's the meals, which is set in the useEffect hook
    return <AppContext.Provider value={{meals, loading, setSearchTerm}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }