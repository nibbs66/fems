import React from 'react';
import Title from "./Title";

const Openingstijden = () => {
    return (
        <div id={`openingstijden`} className={`pt-32 flex flex-col justify-center items-center w-2/5 gap-6 text-slate-400 md:text-lg`}>
            <Title title={'Openingstijden'}/>

            <div className={`flex flex-col sm:flex-row items-center sm:items-start w-full justify-between  border-b-2 border-slate-200 p-5`}>
                <span>Maandag</span>
                <div className={`flex flex-col`}>
                    <span>10:00-12:00</span>
                    <span>13:00-17:00</span>
                </div>
            </div>
            <div className={`flex flex-col sm:flex-row items-center sm:items-start w-full justify-between  border-b-2 border-slate-200 p-5`}>
                <span>Dinsdag</span>
                <div className={`flex flex-col`}>
                    <span>10:00-12:00</span>
                    <span>13:00-17:00</span>
                </div>
            </div>
            <div className={`flex flex-col sm:flex-row items-center sm:items-start w-full justify-between  p-5 border-b-2 border-slate-200 `}>
                <span>Woensdag</span>
                <div className={`flex flex-col`}>
                    <span>13:00-17:00</span>
                    <span>19:00-21:00</span>
                </div>
            </div>
            <div className={`flex flex-col sm:flex-row items-center sm:items-start w-full justify-between  p-5 border-b-2 border-slate-200`}>
                <span>Donderdag</span>
                <div className={`flex flex-col`}>
                    <span>10:00-12:00</span>
                    <span>13:00-17:00</span>
                </div>
            </div>
            <div className={`flex flex-col sm:flex-row items-center sm:items-start w-full justify-between  p-5 border-b-2 border-slate-200`}>
                <span>Vrijdag</span>
                <div className={`flex flex-col`}>
                    <span>10:00-12:00</span>
                    <span>13:00-17:00</span>
                </div>
            </div>
            <div className={`flex flex-col sm:flex-row items-center sm:items-start w-full justify-between  p-5 border-b-2 border-slate-200`}>
                <span>Zaterdag</span>
                <div className={`flex flex-col`}>
                    <span>10:00-13:00</span>

                </div>
            </div>
            <div className={`flex flex-col sm:flex-row items-center sm:items-start w-full justify-between  p-5 border-b-2 border-slate-200`}>
                <span>Zondag</span>
                <div className={`flex flex-col`}>
                    <span>Gesloten</span>

                </div>
            </div>

        </div>
    );
};

export default Openingstijden;
