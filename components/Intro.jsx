import React from 'react';
import { CalendarDaysIcon} from '@heroicons/react/24/outline'
const Intro = () => {

    return (
        <div id={`home`} className={` flex flex-col items-center w-full justify-center bg-bgImg  h-screen   text-white gap-6`}>
            <div
                className={` text-4xl text-center lg:text-6xl pt-8 f tracking-wide  font-thin text-white`}>

              Fems Hair & Beautysalon
            </div>
            <div>
                Welkom
            </div>


                <div className="relative group mt-5">
                    <div
                        className="absolute -inset-0.5 bg-white rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                    </div>
                    <button  className={`relative flex items-center bg-black/70 hover:bg-black  rounded py-4 px-7 divide-x-2 divide-pink-600 text-xl  uppercase leading-none `}>
                        <a href="#nieuws">  <span className="flex items-center space-x-3 pr-6">
                           <span className={`text-slate-100 `}>Meer Info </span>
                        <span >&darr;</span>

                        </span> </a>

                        <a  className="flex items-center space-x-1 pl-6 text-indigo-400 group-hover:text-slate-100 transition duration-200" href="https://1kapper.nl/saloon/book/data/15164/#anchorAvailability">

                         <CalendarDaysIcon className={`h-6 w-6  `}/>
                         <span className={`pl-6 `}>Afspraak Maken</span>

                        </a>

                    </button>
                </div>

            </div>




    );
};

export default Intro;
