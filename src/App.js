
import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';

function App() {
  return (
    <main className="App">
      Meals App
      <Favorites />
      <Meals />
      <Modal />
      <Search />
    </main>
  );
}

export default App;
