import logo from './logo.svg';
import './App.css';
  import {Home} from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Example from './pages/Example'
import Test from './pages/BackgroundVideo';
import Navbar from './pages/Navbar';
import Card from './components/Card';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
    // <Card />
 
  );
}

export default App;
