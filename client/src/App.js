import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Resource } from './Pages/Resource';
import { Review } from './Pages/Review';
import { Appointment } from './Pages/Appointment';
import { Navbar } from './Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Resource" element={<Resource />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
