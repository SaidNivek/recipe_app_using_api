import { useGlobalContext } from '../context'

function Meals() {

  const context = useGlobalContext()

  console.log(context)

  return (
    <>
      <h1>Meals Component</h1>
      <p>{context.name}</p>
    </>
  )
}

export default Meals