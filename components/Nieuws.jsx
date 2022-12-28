import React from 'react';
import Title from "./Title";
import NieuwsCard from "./Cards/NieuwsCard";
import TestCard from "./Cards/TestCard";

const Nieuws = () => {
    return (
        <div id={`nieuws`} className={`pt-32 px-5 flex flex-col justify-center items-center  gap-6 w-full`}>
            <Title title={'Nieuws'}/>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3`}>

                <NieuwsCard/>

            </div>

        </div>
    );
};

export default Nieuws;
