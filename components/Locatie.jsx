import React from 'react';
import Title from "./Title";

const Locatie = () => {
    return (
        <div id={`locatie`} className={`pt-32 flex flex-col justify-center items-center w-full gap-6`}>
            <Title title={'Locatie'}/>
            <iframe className={`w-full h-96`} src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyAseRB0fPhrpLCXNBHSWjoPKqONg1zw5lo&q=53.407651573949,6.6631865501404'}>

            </iframe>

        </div>
    );
};

export default Locatie;
