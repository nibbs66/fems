import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Facebook from "./icons/Facebook";
import monkey from '../public/img/monkey.png'
const Footer = () => {
    return (
        <div className={`flex py-4 mb-4 items-center justify-around`}>
            <div className={`cursor-pointer`}>
                <a href={`https://www.facebook.com/234332720672406`} target="_blank">
                    <Facebook/>
                </a>
            </div>
            <div className={`flex items-center justify-center gap-5 text-slate-400`}>
                <span>Website by</span>
                <div className={`h-10 w-10 cursor-pointer`}>
                    <Image src={monkey} alt={``} layout={"intrinsic"} objectFit={`contain`}/>
                </div>

            </div>
        </div>
    );
};

export default Footer;
