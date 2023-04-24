import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Followbar from './Components/Followbar/Followbar';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import Experience from './Pages/Experience/Experience';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      



    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/portfolio' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/contact' element={<Contact/>}/> */}
    </Routes>
    </BrowserRouter>
      {/* <Followbar/> */}
      <Footer/>


      </>
      

  );
}

export default App;
