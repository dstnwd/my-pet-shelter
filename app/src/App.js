import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route element={<AllPets />} path="/" />
          <Route element={<NewPet />} path="/pets/new" />
          <Route element={<EditPet />} path="/pets/edit/:id" />
          <Route element={<OnePet />} path="/pets/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;