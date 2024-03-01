import './styles/_app.scss';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Headphones from './pages/Headphones/Headphones';
import Speakers from './pages/Speakers/Speakers';
import Earphones from './pages/Earphones/Earphones';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Headphones" element={<Headphones />}/>
        <Route path="/Speakers" element={<Speakers />}/>
        <Route path="/Earphones" element={<Earphones />}/>
      </Routes>
    </div>
  );
}

export default App;
