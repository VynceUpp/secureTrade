import { useState, useRef, useEffect } from 'react';
import './login.css'; // Assuming you want to reuse login styles
import { Button } from '../components/General';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const registerForm = useRef(null)
  const {user, registerUser} = useAuth()
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(()=> {
    if(user){
      navigate('/')
    }
  }, [])

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const phone = registerForm.current.phone.value
    const password = registerForm.current.password.value
    const confirmPassword = registerForm.current.confirmPassword.value

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }

    const userInfo = {name, email, phone, password}
    registerUser(userInfo)
  };

  return (
    <main>
      <div className="signup">
        <h2 className='text-[22px] mb-4'>Register</h2>
        <form className="form" id="register-form" onSubmit={handleRegister} ref= {registerForm}>
          
          {/* Name input */}
          <div className="textbox">
            <input 
              type="text" 
              name="name" 
              required 
            />
            <label>Name</label>
            <span className="material-symbols-outlined"><i className="ri-user-line"></i></span>
          </div>
          
          {/* Email input */}
          <div className="textbox">
            <input 
              type="email" 
              name="email" 
              required 
            />
            <label>Email</label>
            <span className="material-symbols-outlined"><i className="ri-mail-line"></i></span>
          </div>

          {/* Phone input */}
          <div className="textbox">
            <input 
              type="tel" 
              name="phone" 
              required 
            />
            <label>Phone</label>
            <span className="material-symbols-outlined"><i className="ri-phone-line"></i></span>
          </div>

          {/* Password input */}
          <div className="textbox">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              required
            />
            <label>Password</label>
            <span className="material-symbols-outlined"><i className="ri-key-line"></i></span>
          </div>

          {/* Confirm Password input */}
          <div className="textbox">
            <input
              type={passwordVisible ? "text" : "password"}
              name="confirmPassword"
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
            <p className="error !text-red-500">Passwords do not match!</p>
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
