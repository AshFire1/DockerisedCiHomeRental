import React, { useEffect, useState } from "react";
import "../styles/List.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setListings } from "../redux/state";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import ListingCard from "../components/ListingCard";
const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const { search } = useParams();
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings);
  const getSearchListings = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/properties/search/${search}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      dispatch(setListings({ listings: data }));
      console.log(listings)
      setLoading(false);
    } catch (err) {
      console.log("Fetch Search List failed", err.message);
    }
  };
  
  useEffect(() => {
    getSearchListings();
  }, [search]);
  return loading ? (
    <Loader />
  ) : (
    <>
      <NavBar />
      <h1 className="title-list">{search}</h1>
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
              country={country}
            />
          )
        )}
      </div>
    </>
  );
};

export default SearchPage;
