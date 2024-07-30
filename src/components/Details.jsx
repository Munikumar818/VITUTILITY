import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
export default function Details(){
    let {id}=useParams()
    const[d,setD]=useState([]);
    useEffect(()=>{
    fetch(`https://my-backend-1-67e8.onrender.com/facultyreview/${id}`)
      .then(response => response.json())
      .then(data => {
        setD(data);
        
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        
      });},[])


      // Sample data for the table
 
      
      
        return (
          <div className="container mt-4">
            {/* Summary Review Box */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title"><strong>
                  Summary Review</strong></h5>
                <p className="card-text">{
                  d!=undefined? d.summaryReview : <p> Loading </p>
                  }

                </p>
              </div>
            </div>
      
            {/* Table */}
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>

                    <th>Reviews</th>

                  </tr>
                </thead>
                <tbody>
                  {d.Review!==undefined ? d.Review.map((row,index) => (
                    <tr key={index}>
                      <td>{row}</td>
                    </tr>
                  )) : <p>Loading</p>}
                </tbody>
              </table>
            </div>
          </div>
        );
      };
      
      
