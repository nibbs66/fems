import React from 'react';

const Title = ({title}) => {
    return (
        <div>
            <span className={`text-4xl text-slate-500`}>{title}</span>
        </div>
    );
};

export default Title;
