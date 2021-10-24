import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="wrapper">
    <div className="container">

    <div className="box">
            <div className="content">
                <div className="main">01</div>
                <div className="type">Docker</div>
                <div className="details">Containerization.</div>
                <Link className='option' to='/docker'>Read More</Link>
            </div>
        </div>

        <div className="box">
            <div className="content">
                <div className="main">02</div>
                <div className="type">Kubernetes</div>
                <div className="details">Orchestration tool</div>
                <Link className='option' to='/kubernetes'>Read More</Link>
            </div>
        </div>
  
        <div className="box">
            <div className="content">
                <div className="main">03</div>
                <div className="type">Spring 5</div>
                <div className="details">Reactive Spring</div>
                <Link className='option' to='/reactive'>Read More</Link>
            </div>
        </div>
        
   
    </div>
  </div>
);

export default Header;