import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/listings')
      .then(res => res.json())
      .then(data => setListings(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {listings.map(listing => (
        <Link key={listing._id} to={`/listing/${listing._id}`} className="border p-2 rounded">
          <img src={listing.images[0]} alt="" className="w-full h-48 object-cover" />
          <h3>{listing.title}</h3>
          <p>{listing.location}</p>
          <strong>₹{listing.price}/night</strong>
        </Link>
      ))}
    </div>
  );
}
export default Home;