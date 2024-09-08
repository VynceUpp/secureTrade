import { useState } from 'react';
import './login.css'; // Assuming you want to reuse login styles
import { Button } from '../components/General';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
      console.log('Registering user...', formData);
      // Implement registration logic (e.g., sending data to the backend)
    }
  };

  return (
    <main>
      <div className="signup">
        <h2 className='text-[22px] mb-4'>Register</h2>
        <form className="form" id="register-form" onSubmit={handleRegister}>
          
          {/* Name input */}
          <div className="textbox">
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
            <label>Name</label>
            <span className="material-symbols-outlined"><i className="ri-user-line"></i></span>
          </div>
          
          {/* Email input */}
          <div className="textbox">
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            <label>Email</label>
            <span className="material-symbols-outlined"><i className="ri-mail-line"></i></span>
          </div>

          {/* Phone input */}
          <div className="textbox">
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleInputChange}
              required 
            />
            <label>Phone</label>
            <span className="material-symbols-outlined"><i className="ri-phone-line"></i></span>
          </div>

          {/* Password input */}
          <div className="textbox">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label>Password</label>
            <span className="material-symbols-outlined"><i className="ri-key-line"></i></span>
          </div>

          {/* Confirm Password input */}
          <div className="textbox">
            <input
              type={passwordVisible ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <label>Confirm Password</label>
            <span className="material-symbols-outlined"><i className="ri-key-line"></i></span>
          </div>

          {/* Password visibility toggle */}
          <a 
            id="showPasswordButton" 
            onClick={togglePasswordVisibility} 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            {passwordVisible ? <EyeOff size={24} /> : <Eye size={24} />}
            <span style={{ marginLeft: '8px' }}>
              {passwordVisible ? 'Hide Password' : 'Show Password'}
            </span>
          </a>

          {/* Error message for password mismatch */}
          {!passwordMatch && (
            <p className="error text-red-500">Passwords do not match!</p>
          )}

          {/* Register button */}
          <Button className="w-full h-14" onClick={handleRegister}>Register</Button>

          {/* Redirect to login page */}
          <p className='text-sm'>Already have an account? <a href="/login">Login here</a></p>
        </form>
      </div>
    </main>
  );
};

export default Register;
