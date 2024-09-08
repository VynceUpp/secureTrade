import { useState, useEffect, useRef } from 'react';
import './login.css'; 
import { Button } from '../components/General';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {user, loginUser, loginWithGoogle} = useAuth();
  const navigate = useNavigate();

  const loginForm = useRef(null)

  useEffect(()=> {
    if(user){
      navigate('/')
    }
  }, [])


  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value

    const userInfo = {email, password}
    loginUser(userInfo)
  };

  return (
    
      <main>
        <div className="signup">
          <h2 className='text-[22px] mb-4'>Login</h2>
          <form onSubmit={handleLogin} ref={loginForm}>
            <div className="textbox">
              <input type="email" id="email" name="email" required />
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
           <Button onClick={loginWithGoogle}
            className="w-1/2 h-14 bg-transparent flex items-center justify-center" 
          >
            <i className="fab fa-google mr-2"></i> Sign in with Google
          </Button>


            <p className='text-sm'>Don't have an account? <a href="/register">Sign Up here</a></p>
          </form>
        </div>
      </main>
  
  );
};

export default Login;
