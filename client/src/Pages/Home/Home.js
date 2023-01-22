import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import './Home.css'

const Home = ({ logout }) => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.user) navigate("/");
    }, [userData.user, navigate]);
    return (
      <div className="home_class">
        <button onClick={logout}>Log out</button>
        <section className="home_top">
          <div className="ask_question_btn">Ask Question</div>
          {/* show username in homepage */}
          <div className="user_class">
            <h1>WelCome {userData.user?.display_name}</h1>
          </div>
        </section>

        {/* logout when the button clicked in which the function comes from app.js */}

        <div className="question_wrapper">
          {" "}
          <b>Questions</b>
        </div>
        <hr />

        <div className='q_display_board'>
          <div>User</div>
          <div>Question</div>
        </div>
      </div>
    );
}

export default Home