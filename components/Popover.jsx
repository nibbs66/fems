
import React from "react";

const Popover = ({disabled,  message}) => {
    return (
        <div className={`flex w-full z-20`}>
            <div
                className={`absolute bottom-12  drop-shadow-lg flex flex-col justify-center w-full items-center  group-hover:flex`}>
                            <span
                                className={`flex flex-col rounded-md items-center py-3 px-4 bg-black opacity-30 text-white  font-semibold text-sm text-center whitespace-nowrap`}>
                               <span className={` group-hover:flex`}>Fems Hair & Beauty Salon</span>
                      <span className={` group-hover:flex`}>Arp Schnitgerhof 42</span>
                      <span className={` group-hover:flex`}>9981LC Uithuizen</span>

                            </span>
                {/*<div className={`h-4 w-4 rotate-45 bg-black opacity-50 -mt-2.5`}></div>*/}

            </div>
        </div>
    )
}

export default Popover;
