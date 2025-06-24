import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Listing() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then(res => res.json())
      .then(data => setListing(data));
  }, [id]);

  if (!listing) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img src={listing.images[0]} className="w-full h-96 object-cover" />
      <h2 className="text-2xl font-bold my-2">{listing.title}</h2>
      <p>{listing.description}</p>
      <p className="mt-2">📍 {listing.location}</p>
      <strong>₹{listing.price}/night</strong>
    </div>
  );
}
export default Listing;