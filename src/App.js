// src/App.js
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <NavBar />
      <div className="App_home_page_content">
        <div className="absolute inset-0 -z-10">
         
        </div>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;