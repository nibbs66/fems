import React from 'react';
import Image from "next/image";
import card from '../../public/img/businessCard.jpeg'
const TestCard = () => {
    return (
        <div className={` w-screen h-screen  `}>
            <div className={`h-auto w-1/3  my-2 border border-black  rounded-md drop-shadow-xl
                        md:rounded-xl md:drop-shadow-2xl px-5  `}>

                <div className={`flex flex-col w-full items-center`}>
                   <div className={``}>
                       <Image src={card} alt={``} layout={`intrinsic`} objectFit={`contain`}/>
                   </div>
                    <div className={``}>
                        <span>test</span>
                        <span>9-mei</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TestCard;
