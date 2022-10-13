import { useGlobalContext } from '../context'
import { BsHandThumbsUp } from 'react-icons/bs'

function Meals() {

  // Destructure and assign meals from the global context
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext()


    if(loading) {
      return (
        <section className="section">
          <h4>Loading...</h4>
        </section>
      )
    } else if(meals.length < 1) {
      return (
        <section className="section">
          <h4>No meals matched your search term. Please try again.</h4>
        </section>
      )
    } else {
      return (
        <section className="section-center">
          {meals.map((singleMeal) => {
            // Pull out the properties that we want to use from the meals object, and assign easier to read variable names, as needed
            const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
            return (
              <article key={idMeal} className="single-meal" >
                <img src={image} className="img" onClick={() => selectMeal(idMeal)} alt={`image of ${title}`}/ >
                <footer>
                  <h5>{title}</h5>
                  <button className="like-btn" onClick={() => addToFavorites(idMeal)}><BsHandThumbsUp /></button>
                </footer>
              </article>
            )
          })}
        </section>
      )
    }      
}

export default Meals