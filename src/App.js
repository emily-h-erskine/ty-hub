import './App.css';
import { Footer } from './CommonComponents/Footer';
import { Header } from './CommonComponents/Header';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
