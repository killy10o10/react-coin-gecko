import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import HomeList from './Components/HomeList';
import CountryInfo from './Components/CountryInfo';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeList />} />
        <Route path="/CountryInfo" element={<CountryInfo />} />
      </Routes>
    </>
  );
}

export default App;
