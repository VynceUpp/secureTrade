import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/global/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Login from './auth/Login';
import Register from './auth/Register';

const App = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />


        </Routes>
      </Router>
    );
  }
  
  export default App;