import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Snake from './pages/Snake';

function App() {

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/Home/" element={<Home />} />
        <Route path="/Snake/" element={<Snake />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
