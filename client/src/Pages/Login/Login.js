import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            //sending user data to database to be logged in
            const loginRes = await axios.post('http://localhost:4000/api/users/login',
                {
                    email: form.email,
                    password: form.password
                });
            
            //update global state with response from backend(user-info)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            //set localStorage with the token
            localStorage.setItem('auth-token', loginRes.data.token);

            //navigate user to homepage
            navigate('/home');
        } catch (err) {
            console.log('problem', err.response.data.msg);
            alert(err.response.data.msg);
        }
    }

    useEffect(() => {
        if (userData.user) navigate('/home');
    }, [userData.user, navigate]);

    return (
      <>
        <div className="login_wrapper">
          <div className="loginClass">
            <h1>Login to your account</h1>
            <form onSubmit={handleSubmit}>
              {/* <label>Email: </label> */}
              <input
                placeholder="Email"
                type="text"
                name="email"
                onChange={handleChange}
              />
              <br />
              {/* <label>Password: </label> */}
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
              <br />
              {/* <Link to="/">Forget password</Link> <br /> */}
              <div onClick={handleSubmit} className="login_btn">
                <Link to="/home">Submit</Link>
              </div>
            </form>
            <Link to="/signup">Create a new account</Link>
          </div>

          <div className="aboutClass">
            <h3>About</h3>
            <h1>Evangadi Networks Q&A</h1>
            Evangadi Networks No matter what stage of life you are in, whether
            you’re just starting elementary school or being promoted to CEO of a
            Fortune 500 company, you have much to offer to those who are trying
            to follow in your footsteps. Wheather you are willing to share your
            knowledge or you are just looking to meet mentors of your own,
            please start by joining the network here.
            <div className="howitworks-btn">How it Works</div>
          </div>
        </div>
      </>
    );
}

export default Login