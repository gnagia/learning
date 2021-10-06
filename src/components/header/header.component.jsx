import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="body">
    <div className="container">
        <div className="box">
            <div className="content">
                <div className="h2">01</div>
                <div className="h3">Kubernetes</div>
                <div className="p">Orchestration tool</div>
                <Link className='option' to='/kubernetes'>Read More</Link>
            </div>
        </div>
  
        <div className="box">
            <div className="content">
                <div className="h2">02</div>
                <div className="h3">Docker</div>
                <div className="p">Containerization.</div>
                <Link className='option' to='/docker'>Read More</Link>
            </div>
        </div>
   
        <div className="box">
            <div className="content">
                <div className="h2">03</div>
                <div className="h3">Helm</div>
                <div className="p">yet to discover.</div>
                <Link className='option' to='/helm'>Read More</Link>
            </div>
        </div>
    </div>
  </div>
);

export default Header;