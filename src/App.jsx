import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import Navbar from './components/global/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Login from './auth/Login';
import Register from './auth/Register';
import { AuthProvider } from './auth/AuthContext';

const App = () => {
    return (
      <Router>
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

            <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            </Route>
            
            </Routes>
        </AuthProvider>
      </Router>
    );
  }
  
  export default App;