import React from 'react';
import CardDisplay from "./CardDisplay";
import Stars from "../Stars";
import Image from "next/image";


import nicolle from '../../public/img/nicolle.jpeg'
import margriet from '../../public/img/margriet.jpeg'
import richard from '../../public/img/richard.jpeg'
import annemarie from '../../public/img/annemarie.jpeg'
import derkelina from '../../public/img/derkelina.jpeg'
import anne from '../../public/img/anne.jpeg'
import renate from '../../public/img/renate.jpeg'
import manuela from '../../public/img/manuela.jpeg'
import ellen from '../../public/img/ellen.jpeg'
const ReviewCard = () => {
    const reviewData = [
        {
            img: nicolle,
            name: 'Nicolle Stevens',
            rating: <Stars/>,
            review: 'Ze is altijd vriendelijk en vrolijk. Ze kijkt welk model het beste bij je past. Ben altijd super tevreden als ik bij haar weg ga. Top kapper.❤️'
        },
        {
            img: margriet,
            name: 'Margriet Meijerhof-Huizinga',
            rating: <Stars/>,
            review: 'Femke kijkt echt naar wat bij je past zowel kwa model als kleur. echt super.'
        },
        {
            img: richard,
            name: 'Richard Martine Matthijs Raphaels',
            rating: <Stars/>,
            review: 'Leuke kapster. Knipt goed. Kan ook goed met krullend haar overweg. En ze doet het geweldig met de kinderen!!'
        },
        {
            img: annemarie,
            name: 'Annemarie Agema',
            rating: <Stars/>,
            review: 'Super kapster, gezellig en mijn kinderen vinden haar geweldig!!'
        },
        {
            img: derkelina,
            name: 'Derkelina Bul',
            rating: <Stars/>,
            review: 'Ik schrijf wel recensie. Mijn haar zit immers iedere keer perfect. Moeilijk haar. Eigen krul. Ook heb ik nu wenkbrauwen. Ben er zo blij mee. Djw. Tot de volgende keer.'
        },
        {
            img: anne,
            name: 'Anne Wijers',
            rating: <Stars/>,
            review: 'Geweldige kapsalon, ben zeer tevreden en kom er al jaren.'
        },
        {
            img: renate,
            name: 'Renate Rijploeg',
            rating: <Stars/>,
            review: 'Altijd gezellig en dik tevreden bij Femke!'
        },
        {
            img: manuela,
            name: 'Manuela van der Werf',
            rating: <Stars/>,
            review: 'Super gezellig en professioneel!'
        },
        {
            img: ellen,
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
