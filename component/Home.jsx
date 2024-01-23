import React from 'react';
import {useNavigate } from 'react-router-dom';
const Home = () => {

  const navigate = useNavigate();
   
    const navigateToLogin= () => {
        navigate('/login');
    };
  return (
    <div>
      <header>
        
      </header>
      <main>
        <p>SUPERCHAT</p>
        <img src="" alt="" />
        <button onClick={navigateToLogin}>create</button>
      </main>
   
    </div>
  );
}

export default Home;