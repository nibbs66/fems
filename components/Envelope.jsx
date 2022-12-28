import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/20/solid'

const Envelope = ({height, width}) => {
    return (
        <div>
           <EnvelopeIcon className={`${height} ${width}`}/>
        </div>
    );
};

export default Envelope;
