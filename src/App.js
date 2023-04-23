import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Followbar from './Components/Followbar/Followbar';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Skills from './Pages/Skills/Skills';
import Experience from './Pages/Experience/Experience';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      



    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
      <Followbar/>
    </BrowserRouter>
      <Footer/>


      </>
      

  );
}

export default App;
