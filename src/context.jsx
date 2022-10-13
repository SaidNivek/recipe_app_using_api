import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

    // This function will get the favorites from local storage
    // Needs to be at the top because it needs to be initalized before it's invoked
    const getFavoritesFromLocalStorage = () => {
        let favorites = localStorage.getItem('favorites')
        if (favorites) {
            favorites = JSON.parse(localStorage.getItem('favorites'))
        } else {
            favorites = []
        }
        return favorites
    }

const AppProvider = ({ children }) => {

    // Setup a loading variable useState hooke
    const [loading, setLoading] = useState(false)
    // Get the data from the fetchMeals function
    const [meals, setMeals] = useState([])
    // Create a variable to contain the search term, to be used in the Search component
    const [searchTerm, setSearchTerm] = useState('')
    // Create a state for the modal, to display it and to hide it
    const [showModal, setShowModal] = useState(false)
    // Create a selectedMeal state, to use with the modal, to determine the data that is displayed in the modal
    const [selectedMeal, setSelectedMeal] = useState(null)
    // Create a hook for the user's favorite meals to be stored in, which checks the local storage to see if there are favorites there from a previous session
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage())

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

    // Set up this use effect to fix the bug where a random click after a search term is called will request twice to the server
    // This double request will cause a random meal to NOT display, as the change in searchTerm triggers an overriding call
    useEffect(() => {
        if (!searchTerm) {
            return 
        }
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])
    
    // This useEffect will run when the application loads, which will load the page with the data for an empty search
    useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])
    
    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl)
    }

    // This function will set the selectedMeal, when chosen by the user, that will display in the Modal
    const selectMeal = (idMeal, favoriteMeal) => {
        let meal
        // If the meal is a favorite, check the favorites array for the meal and select that one
        if (favoriteMeal) {
            meal = favorites.find((meal) => meal.idMeal === idMeal)
        // If the meal is not in the favorites array, then select it from the rest of the meals array
        } else {
            // This will search through all of the meals held in the state variable, and find the selected meal
            // It will grab the mealId and set meal equal to the found meal
            meal = meals.find((meal) => meal.idMeal === idMeal)
        }
        // Sets the state of the selectedMeal to the found meal, above
        setSelectedMeal(meal)
        // This will set showModal to true, to display the data in the modal
        setShowModal(true)
    }

    // This function will close the modal when the close is selected
    const closeModal = () => {
        setShowModal(false)
    }

    // This function will allow the user to add a meal to their favorites, which will be displayed on the page for them
    const addToFavorites = (idMeal) => {
        // Check to see if the selectedMeal is already in the favorites list
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal)
        // If it is in the favorite slist, end the function and return nothing, since nothing needs to change
        if(alreadyFavorite) return
        // Find the meal that matches the selected meal to be added
        const meal = meals.find((meal) => meal.idMeal === idMeal)
        // If the meal is not in thefavorite list, add it to the favorite list
        const updatedFavorites = [...favorites, meal]
        // Set the updatedFavorites list to the favorites list, using its hook
        setFavorites(updatedFavorites)
        // Add the favorites to the local storage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }

    // This function will remove the selected Favorite item from the favorites list
    const removeFromFavorites = (idMeal) => {
        // This will filter out all of the meals that ARE NOT the idMeal, putting them into a new list to be set with the proper hook
        const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal)
        setFavorites(updatedFavorites)
        // This will set the favorites in local storage to the updated favorites array, after removal
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }



    // Pass in the global values, in this case it's the meals, which is set in the useEffect hook
    return <AppContext.Provider value={{meals, loading, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal, favorites, addToFavorites, removeFromFavorites}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }