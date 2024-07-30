import { Link } from 'react-router-dom';
import React from 'react';
const Navigation=()=>{
    return(
        <div>
      <nav>
       <div>
        <strong>eduAsync</strong>
       </div>
        <div>
          <ul>
            <Link to='/' className='links'><li href="/">Home</li></Link>
            <Link to='/Facrev' className='links'><li >FACULTY-REVIEW</li></Link>
            <Link to='/' className='links'><li >CAR-POOL </li></Link>
            <Link to='/' className='links'><li >PREV-YR-QUESTION PAPERS</li></Link>
          </ul>
        </div>
      </nav>
    </div>
    )
}

export default Navigation