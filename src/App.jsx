import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar';
import Home from "./components/LandingPage/Home";
import AboutPage from './components/LandingPage/AboutPage';
import Skills from './components/LandingPage/Skills';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<Skills />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
