import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Navbar />
        <About />
        <Education />
        <Work />
        <Hobbies />
      </main>
    </div>
  );
}

export default App;
