import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import './SignUp.css'

const SignUp = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    
    //importing global state from context
    const [userData, setUserData] = useContext(UserContext);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //sending data to be registered in database
            await axios.post('http://localhost:4000/api/users', form);

            //once registered the login automatically so send the new user info to be logged in
            const loginRes = await axios.post('http://localhost:4000/api/users/login', {
                email: form.email,
                password: form.password
            });

            // set the global state with the new user info
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            //set localStorage with the token
            localStorage.setItem('auth-token', loginRes.data.token);

            //navigate to homepage once the user is signed up
            navigate("/home");
        } catch (error) {
            console.log('problem ==>', error.response.data.msg);
        }
    }
    return (
      <>
        <div className="signup_wrapper">
          <div className="signupClass">
            <h1>Join the netwotk</h1>
            <form onSubmit={handleSubmit}>
              {/* <label>Email: </label> */}
              <input
                className="email_field"
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <br />
              {/* <label>First Name: </label> */}
              <div className="name_field">
                <input
                  className="f_name"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                />
                <br />
                {/* <label>Last Name: </label> */}
                <input
                  className="l_name"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                />
                <br />
              </div>

              {/* <label>User Name: </label> */}
              <input
                className="user_field"
                type="text"
                placeholder="User Name"
                name="userName"
                onChange={handleChange}
              />
              <br />

              {/* <label>Password: </label> */}
              <input
                className="pass_field"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <br />

              <div onClick={handleSubmit} className="signup_btn">
                Agree and Join
              </div>
            </form>
            <div>
              <p>
                I agree to the <a href=""> privacy policy</a> and{" "}
                <a href="">terms of service</a>{" "}
              </p>
            </div>
            <Link to="/login">Already have an account?</Link>
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
};

export default SignUp;
