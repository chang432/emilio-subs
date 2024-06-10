import React, { useState, useEffect } from 'react'
import '../css/Animations.css'
import ReviewCard from "./ReviewCard"
import reviews from "../data/reviews.json"
import gmaps_logo from "../assets/reviews/gmaps_logo.png"
import gmaps_star from "../assets/reviews/gmaps_star.png"
import yelp_logo from "../assets/reviews/yelp_logo.png"
import yelp_star from "../assets/reviews/yelp_star.png"
import tripadvisor_logo from "../assets/reviews/tripadvisor_logo.png"
import tripadvisor_star from "../assets/reviews/tripadvisor_star.png"
import sub_lucky from "../assets/reviews/sub_lucky.png"
import sub_misc from "../assets/reviews/sub_misc.png"
import sub_unforgiven from "../assets/reviews/sub_unforgiven.png"

const ReviewPage = () => {

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
      setFadeIn(true);
    }, []);

    return (
        <div className={`flex flex-col items-center justify-center space-y-0.5 my-0.5 mx-0.5 ${fadeIn ? 'animate-fade-in' : ''}`}>
            <h1 className="text-3xl md:text-6xl py-20 w-full text-center text-white bg-black">Reviews</h1>
            <ReviewCard logo={gmaps_logo} stars={gmaps_star} author={reviews.google[0].author} review={reviews.google[0].review} pic={sub_lucky} />
            <ReviewCard logo={yelp_logo} stars={yelp_star} author={reviews.yelp[0].author} review={reviews.yelp[0].review} pic={sub_unforgiven} />
            <ReviewCard logo={tripadvisor_logo} stars={tripadvisor_star} author={reviews.tripadvisor[0].author} review={reviews.tripadvisor[0].review} pic={sub_misc} />
        </div>
    )
}

export default ReviewPage