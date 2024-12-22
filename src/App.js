import logo from './logo.svg';
import './App.css';
  import {Home} from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Example from './pages/Example'
import Test from './pages/Test';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
    // <Example />
  );
}

export default App;
