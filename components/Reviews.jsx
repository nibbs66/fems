import React from 'react';
import {reviewData} from "../reviewData";
import ReviewCard from "./Cards/ReviewCard";
import Title from "./Title";


const Reviews = () => {
    return (
        <div id={`reviews`} className={`pt-32 px-5 flex flex-col justify-center items-center  gap-6 w-full`}>
            <Title title={'Reviews'}/>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3`}>

                <ReviewCard/>

            </div>

        </div>
    );
};

export default Reviews;
