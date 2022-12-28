import React from 'react';
import {StarIcon} from "@heroicons/react/24/solid";
const Stars = () => {
    return (
        <div className={`flex`}>
            <StarIcon className={` h-6 w-6 text-indigo-500 `}/>
            <StarIcon className={` h-6 w-6 text-indigo-500 `}/>
            <StarIcon className={` h-6 w-6 text-indigo-500 `}/>
            <StarIcon className={` h-6 w-6 text-indigo-500 `}/>
            <StarIcon className={` h-6 w-6 text-indigo-500 `}/>

        </div>
    );
};

export default Stars;
