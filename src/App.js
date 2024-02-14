import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <div>
        <Link to="/Home/"> Home </Link>
      </div>
      <Routes>
        <Route path="/Home/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
