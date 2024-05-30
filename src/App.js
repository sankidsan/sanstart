import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


// import Home from './components/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <HomePage />
        
        {/* {<Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       } */}
      </div>
    </Router>
  );
}

export default App;
