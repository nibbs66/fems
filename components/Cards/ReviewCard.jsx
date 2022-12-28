import React from 'react';
import CardDisplay from "./CardDisplay";
import Stars from "../Stars";
import Image from "next/image";
import {reviewData} from "../../reviewData";
import nicolle from '../../public/img/nicolle.jpeg'
const ReviewCard = () => {
    const reviewData = [
        {
            img: "/../public/img/nicolle.jpeg",
            name: 'Nicolle Stevens',
            rating: <Stars/>,
            review: 'Ze is altijd vriendelijk en vrolijk. Ze kijkt welk model het beste bij je past. Ben altijd super tevreden als ik bij haar weg ga. Top kapper.❤️'
        },
        {
            img: "/../public/img/margriet.jpeg",
            name: 'Margriet Meijerhof-Huizinga',
            rating: <Stars/>,
            review: 'Femke kijkt echt naar wat bij je past zowel kwa model als kleur. echt super.'
        },
        {
            img: "/../public/img/richard.jpeg",
            name: 'Richard Martine Matthijs Raphaels',
            rating: <Stars/>,
            review: 'Leuke kapster. Knipt goed. Kan ook goed met krullend haar overweg. En ze doet het geweldig met de kinderen!!'
        },
        {
            img: "/../public/img/annemarie.jpeg",
            name: 'Annemarie Agema',
            rating: <Stars/>,
            review: 'Super kapster, gezellig en mijn kinderen vinden haar geweldig!!'
        },
        {
            img: "/../public/img/derkelina.jpeg",
            name: 'Derkelina Bul',
            rating: <Stars/>,
            review: 'Ik schrijf wel recensie. Mijn haar zit immers iedere keer perfect. Moeilijk haar. Eigen krul. Ook heb ik nu wenkbrauwen. Ben er zo blij mee. Djw. Tot de volgende keer.'
        },
        {
            img: "/../public/img/anne.jpeg",
            name: 'Anne Wijers',
            rating: <Stars/>,
            review: 'Geweldige kapsalon, ben zeer tevreden en kom er al jaren.'
        },
        {
            img: "/../public/img/renate.jpeg",
            name: 'Renate Rijploeg',
            rating: <Stars/>,
            review: 'Altijd gezellig en dik tevreden bij Femke!'
        },
        {
            img: "/../public/img/manuela.jpeg",
            name: 'Manuela van der Werf',
            rating: <Stars/>,
            review: 'Super gezellig en professioneel!'
        },
        {
            img: "/../public/img/ellen.jpeg",
            name: 'Ellen Nissink',
            rating: <Stars/>,
            review: 'Fijne kapper, altijd naar tevredenheid!'
        },
    ]


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
