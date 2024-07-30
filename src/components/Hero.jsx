import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div className='hero-container' style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start', // Align items at the top
      height: '100vh', 
      paddingTop: '5rem' // Adjust this value to move the cards up or down
    }}>
      <div className='hero-cards' style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        gap: '1rem',
        alignItems: 'center', // Center the cards horizontally
      }}>
        <div className="card cardd" style={{ 
          width: '18rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
        }}>
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2475058899/display_1500/stock-vector-vector-illustration-of-a-student-or-teacher-writing-geometric-formulas-and-solving-a-math-problem-2475058899.jpg"
            className="card-img-top"
            alt="Placeholder"
            style={{ width: 150, height: 150, display: 'block', margin: '0 auto' }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Faculty review</h5>
            <p className="card-text">Click here to view the faculty review page.</p>
            <Link to="/facrev" className="btn btn-primary">FACREV</Link>
          </div>
        </div>
        <div className="card cardd" style={{ 
          width: '18rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
        }}>
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2346628719/display_1500/stock-vector-yellow-car-retro-vintage-model-d-illustration-cartoon-style-cute-vehicle-2346628719.jpg"
            className="card-img-top"
            alt="Placeholder"
            style={{ width: 150, height: 150, display: 'block', margin: '0 auto' }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">CarPOOL</h5>
            <p className="card-text">Click here to Carpool with your vit friends</p>
            <Link to="/carpool" className="btn btn-primary">CARPOOL</Link>
          </div>
        </div>
        <div className="card cardd" style={{ 
          width: '18rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center'
        }}>
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2464762595/display_1500/stock-vector-notebook-paper-flat-illustration-isolated-on-white-background-2464762595.jpg"
            className="card-img-top"
            alt="Placeholder"
            style={{ width: 150, height: 150, display: 'block', margin: '0 auto' }}
          />
          <div className="card-body text-center">
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
