import './Facrev.css';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Facrev = () => {
  const [form, setForm] = useState({
    fullName: '',
    subjectName: '',
    Rating: '',
    Review: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Convert Rating to a number
    const formWithNumberRating = {
      ...form,
      Rating: Number(form.Rating)
    };
  
    fetch('https://my-backend-1-67e8.onrender.com/facultyreview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formWithNumberRating)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      setForm({
        fullName: '',
        subjectName: '',
        Rating: 0,
        Review: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
      alert(`Error: ${error.message}`);
    });
  };
  

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-backend-1-67e8.onrender.com/facultyreview')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <div className='Facrev'>
        <div className="Facrev form">
          <form onSubmit={handleSubmit}>
            <h1>Faculty Review Form</h1>
            <div>
              <label>
                Faculty Name:
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Subject Name (Optional):
                <input
                  type="text"
                  name="subjectName"
                  value={form.subjectName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Rating:
                <select
                  type="Number"
                  name="Rating"
                  value={form.Rating}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Rating</option>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label>
                Review:
                <textarea
                  type="text"
                  name="Review"
                  value={form.Review}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </div>

        <div className="Facrev reviews">
          <div>
            <h1>Reviews (click to know more)</h1>
          </div>
          <div>
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
                    <a key={user.id} href={`#user-${user.id}`} className="table-row">
                      <div className="table-cell">{index+1}</div>
                      <div className="table-cell">{user.fullName}</div>
                      <div className="table-cell">{user.subjectName}</div>
                      <div className="table-cell">{user.averageReview}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facrev;
