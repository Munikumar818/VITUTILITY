import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div>
      <Navigation />
      <div className='hero-cards'>
        <div className="card cardd" style={{ width: '18rem' }}>
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
          <div className="card-body">
            <h5 className="card-title">Faculty review</h5>
            <p className="card-text">Click here to view the faculty review page.</p>
            <Link to="/facrev" className="btn btn-primary">FACREV</Link>
          </div>
        </div>
        <div className="card cardd" style={{ width: '18rem' }}>
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
          <div className="card-body">
            <h5 className="card-title">CarPOOL</h5>
            <p className="card-text">Click here to Carpool with your vit friends</p>
            <Link to="/carpool" className="btn btn-primary">CARPOOL</Link>
          </div>
        </div>
        <div className="card cardd" style={{ width: '18rem' }}>
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
          <div className="card-body">
            <h5 className="card-title">PREV-QUESTION PAPERS</h5>
            <p className="card-text">Click here to get the prev year question papers</p>
            <a href="https://example.com" className="btn btn-primary">QUESTION PAPERS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
