import { useState } from 'react';
import './login.css'; 
import { Button } from '../components/General';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Logging in...');
  };

  return (
    
      <main>
        <div className="signup">
          <h2 className='text-[22px] mb-4'>Login</h2>
          <form className="form" id="login-form" onSubmit={handleLogin}>
            <div className="textbox">
              <input type="text" id="username" name="username" required />
              <label>Username</label>
              <span className="material-symbols-outlined"><i className="ri-mail-line"></i></span>
            </div>
            <div className="textbox">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                required
              />
              <label>Password</label>
              <span className="material-symbols-outlined"><i className="ri-key-line"></i></span>
            </div>
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
          
           <Button className="w-full h-14" onClick={handleLogin}>Login</Button>

            <p className='text-sm'>Don't have an account? <a href="/register">Sign Up here</a></p>
          </form>
        </div>
      </main>
  
  );
};

export default Login;
