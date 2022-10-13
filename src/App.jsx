
import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './context'

function App() {
  // Grab showModal from the globalContext
  const { showModal, favorites } = useGlobalContext()

  return (
    <main className="App">
      Meals App
      <Search />
      {/* Favorites will only display if the length of the favorites array is larger than 0 */}
      {favorites.length > 0 &&<Favorites />}
      <Meals />
      {/* Modal will only display if  showModal is true AND if Modal exists. Modal always exists, so showModal is the trigger for whether or not the Modal will pop up with any information.*/}
      { showModal && <Modal />}
    </main>
  );
}

export default App;