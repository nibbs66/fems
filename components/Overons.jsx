import React from 'react';
import Title from "./Title";

const Overons = () => {
    return (
        <div id={`overons`} className={`pt-32 flex flex-col justify-center items-center w-1/2 gap-6`}>
            <Title title={'Over ons'}/>
           <div className={`flex flex-col gap-3 text-slate-400 text-lg`}>
               <p>
                   Fems Hair en Beautysalon voor hem en haar.
                   Van jong tot oud.
                   Voor een afspraak kunt u mijn bellen op.
               </p>
               <p>
                   Bij Fems Hair ben je aan het juiste adres voor de allernieuwste trends op het gebied van knip-kleur en permanentbehandelingen.
               </p>
               <p className={`text-left`}>
                   Kom langs in een gezellige sfeer.
               </p>
           </div>

        </div>
    );
};

export default Overons;
