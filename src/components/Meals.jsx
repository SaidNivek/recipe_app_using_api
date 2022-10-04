import { useGlobalContext } from '../context'

function Meals() {

  // Destructure and assign meals from the global context
  const { meals } = useGlobalContext()

  return (
      <section className="section-center">
        {meals.map((singleMeal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
          return (
            <article key={idMeal} className="single-meal" >
              <img src={image} style={{width:'200px'}} className="img" />
              <footer>
                <h5>{title}</h5>
                <button className="like-btn">click me</button>
              </footer>
            </article>
          )
        })}
      </section>

  )
}

export default Meals