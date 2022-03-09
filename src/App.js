// import logo from './logo.svg';
import './App.css';
import Benefits from './components/Benefits';
import CellPhone from './components/CellPhone';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Sell from './components/Sell';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Benefits />
      <CellPhone />
      <Reviews />
      <Pricing />
      <Sell />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
