import React from 'react';
import CardDisplay from "./CardDisplay";
import {newsData} from "../../reviewData";
import Image from "next/image";
const NieuwsCard = () => {


    return (
        <>
            {newsData.map((nieuws, idx)=>(
                <div className={`text-slate-400 `} key={idx}>
                    <CardDisplay>

                            {nieuws.img &&
                                <div className={`relative w-full ${nieuws.height}`}>

                                <Image  src={nieuws.img} alt={``} layout={`fill`}  objectFit={`contain`}/>
                            </div>}

                         <div className={`flex flex-col gap-5 items-center  pt-5`}>
                             {nieuws.news && <div className={`w-3/4 whitespace-pre-line`}>{nieuws.news}</div>}

                             <span className={`font-bold`}>{nieuws.date}</span>
                         </div>

                    </CardDisplay>
                </div>
            ))}
        </>

    );
};

export default NieuwsCard;
