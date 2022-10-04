import { useGlobalContext } from '../context'

function Meals() {

  // Destructure and assign meals from the global context
  const { meals } = useGlobalContext()

  console.log(meals)

  return (
    <>
      <h1>Meals Component</h1>
    </>
  )
}

export default Meals