import React from "react";
import {Link} from 'react-router-dom'
const Table=({loading ,data})=>{
    console.log("table");
    return (
        <><div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="table-container">
            <div className="table-header">
              <div className="table-row">
                <div className="table-cell">ID</div>
                <div className="table-cell">Name</div>
                <div className="table-cell">Subject Name</div>
                <div className="table-cell">Avg Rating</div>
              </div>
            </div>
            <div className="table-body">
              
                {data.map((user,index) => (
                <Link to={`/details/${user._id}`} key={index}  className="table-row">
                  <div className="table-cell">{index+1}</div>
                  <div className="table-cell">{user.fullName}</div>
                  <div className="table-cell">{user.subjectName}</div>
                  <div className="table-cell">{user.averageReview}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

        </>
    )
}
export default Table