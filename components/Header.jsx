import {useEffect, useState} from 'react';
import Image from "next/image";
import {Bars3Icon} from "@heroicons/react/24/outline";
import logo from '../public/img/femslogo.png'

const Header = () => {
    const [active, setActive] = useState(false)
    const [bgColor, setBgColor] = useState('bg-transparent')
    const [imgDimensions, setImgDimensions] = useState(150)
    const listenScrollEvent = () => {
        window.scrollY > 5 ? setBgColor('bg-slate-400') : setBgColor('bg-transparent');
        window.scrollY > 5 ? setImgDimensions(100) : setImgDimensions(150);
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <nav className={`flex items-center justify-around w-screen fixed z-40 ${bgColor} transition duration-1000 `}>
            <a href="#home">
                <Image src={logo} alt='' height={`${imgDimensions}`} width={`${imgDimensions}`} objectFit={`contain`}/>
            </a>

            <ul className={`hidden lg:flex gap-4 text-lg text-white font-thin`}>
                <li className={`cursor-pointer hover:text-slate-400`}><a href="#overons">Over Ons</a> </li>
                <li className={`cursor-pointer hover:text-slate-400`}><a href="#reviews">Reviews</a></li>
                <li className={`cursor-pointer hover:text-slate-400`}><a href="#openingstijden">Openingstijden</a></li>
                <li className={`cursor-pointer hover:text-slate-400`}><a href="#locatie">Locatie</a></li>
                <li className={`cursor-pointer hover:text-slate-400`}><a href="#contact">Contact</a></li>
            </ul>

                <div className={`lg:hidden p-1   border-2 rounded cursor-pointer z-20`}>
                    <Bars3Icon onClick={()=>setActive(!active)} className={` h-7 w-7 text-white font-bold cursor-pointer z-20`}/>
                </div>
                <ul className={`${!active && 'hidden'} absolute bg-slate-400 bg-opacity-80 absolute left-0 top-0 w-full p-28 rounded-b space-y-5 text-white text-center uppercase font-bold`}>
                    <li onClick={()=>setActive(!active)} className={`cursor-pointer`}><a href="#overons">Over Ons</a> </li>
                    <li onClick={()=>setActive(!active)} className={`cursor-pointer`}><a href="#nieuws">Nieuws</a></li>
                    <li onClick={()=>setActive(!active)} className={`cursor-pointer`}><a href="#reviews">Reviews</a></li>
                    <li onClick={()=>setActive(!active)} className={`cursor-pointer`}><a href="#openingstijden">Openingstijden</a></li>
                    <li onClick={()=>setActive(!active)} className={`cursor-pointer`}><a href="#locatie">Locatie</a></li>
                    <li onClick={()=>setActive(!active)} className={`cursor-pointer`}><a href="#contact">Contact</a></li>
                </ul>


        </nav>
    );
};

export default Header;
