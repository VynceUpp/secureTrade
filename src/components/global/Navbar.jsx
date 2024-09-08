import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../General';
import '../global/global.css';

// Define the Navbar component
const Navbar = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    console.log('Button clicked!');
    navigate('/login')
  };

  return (
    <div className='header p-4'>
      <div>
        <h2 className='font-bold text-[22px]'>Secure<span>Trade</span></h2>
      </div>
      <div className='flex gap-8 text-sm mr-5 items-center'>
        <div className='flex gap-8'>
          <Link to="/" className='navlinks'>Home</Link>
          <Link to="/about" className='navlinks'>About</Link>
          <Link to="/contact" className='navlinks'>Contact</Link>
          <Link to="/help" className='navlinks'>Help</Link>
        </div>
        <Button onClick={handleButtonClick}>Sign In</Button>
      </div>
    </div>
  );
};

export default Navbar;
