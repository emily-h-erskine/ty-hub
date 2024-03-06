import './App.css';
import { Footer } from './CommonComponents/Footer';
import { Header } from './CommonComponents/Header';
import Home from './Home/Home';
import Activities from './Activities/Activities';
import Resources from './Resources/Resources';
import Podcast from './Podcast/Podcast';
import Ezine from './Ezine/Ezine';
import Contact from './Contact/Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/Ezine" element={<Ezine />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
