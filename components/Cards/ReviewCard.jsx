import React from 'react';
import CardDisplay from "./CardDisplay";
import Stars from "../Stars";
import Image from "next/image";
import {reviewData} from "../../reviewData";
import nicolle from '../../public/img/nicolle.jpeg'
const ReviewCard = () => {
    return (
        <>
            {reviewData.map((review, idx)=>(
                <div  key={idx}>
                    <CardDisplay>
                        <div className={`flex flex-col gap-2 items-center text-center text-slate-400`}>
                            <Image className={`rounded-full`} src={review.img} alt={``} height={100} width={100} objectFit={`contain`}/>
                            <span>{review.name}</span>
                            <span>{review.rating}</span>
                            <p className={`w-3/4`}>{review.review}</p>
                        </div>
                    </CardDisplay>
                </div>

            ))}
        </>

    );
};

export default ReviewCard;
