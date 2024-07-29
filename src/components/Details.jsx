import React, { useState } from 'react'
import { useParams } from 'react-router'
export default function Details(){
    let {id}=useParams()
    const[d,setD]=useState([]);
    fetch(`https://my-backend-1-67e8.onrender.com/details/${id}`)
      .then(response => response.json())
      .then(data => {
        setD(data);
        
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        
      });

    return (
        <>
      <div>`The user is ${id}`</div>
      <div>
        `${d.review}`
      </div>
        </>
    )
}