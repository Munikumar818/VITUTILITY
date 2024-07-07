import './Facrev.css';
import { useState ,useEffect} from 'react';
import Navigation from './Navigation';

const Facrev=()=>{
    const [form, setForm] = useState({
        facultyName: '',
        subjectName: '',
        rating: '',
        review: ''
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
        console.log('Form data:', form);
        // Add your form submission logic here
      };

      const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
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
    
    return(
        <div>
            <Navigation/>
       <div className='Facrev '>
         <div className="Facrev form">
        
        <form onSubmit={handleSubmit}>
        <h1>Faculty Review Form</h1>
          <div>
            <label>
              Faculty Name:
              <input
                type="text"
                name="facultyName"
                value={form.facultyName}
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
                name="rating"
                value={form.rating}
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
                name="review"
                value={form.review}
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
            {data.map(user => (
              <a key={user.id} href={`#user-${user.id}`} className="table-row">
                <div className="table-cell">{user.id}</div>
                <div className="table-cell">{user.name}</div>
                <div className="table-cell">{user.username}</div>
                <div className="table-cell">{user.email}</div>
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