 import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { setListings } from '../redux/state'
import { useDispatch } from 'react-redux'
import ListingCard from '../components/ListingCard'
 
 const CategoryPage = () => {
    const [loading,setLoading]=useState(true)
    const {category}=useParams()
    const dispatch=useDispatch()
    const listings = useSelector((state) => state.listings);

  const getFeedListings = async () => {
    try {
      const response = await fetch(`http://localhost:5000/properties?category=${category}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  };

  useEffect(() => {
    getFeedListings();
  }, [category]);
   return loading? <Loader/>:(
    <>
      <NavBar/>
      <h1 className="title-list"> {category} Listings</h1>
      <div className="list">
        {listings.map(
          ({
            _id,
            listingPhotoPaths,
            creator,
            city,
            province,
            country,
            category,
            type,
            price,
            booking = false,
          }) => (
            <ListingCard 
            listingId={_id}
            listingPhotoPaths={listingPhotoPaths}
            city={city}
            creator={creator}
            province={province} 
            category={category}
            price={price}
            booking={booking}
            country={country}/>
          )
        )}
      </div>
    </>
     
   )
 }
 
 export default CategoryPage