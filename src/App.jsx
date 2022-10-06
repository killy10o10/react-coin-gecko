import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CoinInfo from './Components/CoinInfo';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CoinInfo" element={<CoinInfo />} />
      </Routes>
    </>
  );
}

export default App;
