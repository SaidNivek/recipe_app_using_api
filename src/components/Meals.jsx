import { useGlobalContext } from '../context'
import { BsHandThumbsUp } from 'react-icons/bs'

function Meals() {

  // Destructure and assign meals from the global context
  const { meals, loading } = useGlobalContext()


    if(loading) {
      return (
        <section className="section">
          <h4>Loading...</h4>
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
                <img src={image} className="img" />
                <footer>
                  <h5>{title}</h5>
                  <button className="like-btn"><BsHandThumbsUp /></button>
                </footer>
              </article>
            )
          })}
        </section>
      )
    }      
}

export default Meals