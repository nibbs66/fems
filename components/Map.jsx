
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Map, { Marker, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {ScissorsIcon} from "@heroicons/react/24/outline";
import scissors from '../public/scissors-icon.svg'
import Title from "./Title";

const HomeMap = () => {
    const mapRef = useRef(null)
    const [viewState, setViewState] = useState({
        longitude: 6.663080,
        latitude: 53.407690,
        zoom: 18,
    })

    return (
        <div id={`locatie`} className={`pt-32 flex flex-col justify-center items-center space-y-6 text-black`}>
            <Title title={'Locatie'}/>
            <Map
                {...viewState}
                onMove={(evt) => setViewState(evt.viewState)}
                mapStyle="mapbox://styles/nibbs66/cldk72tza002a01oqpvq7wxrj"
                style={{ width: '100%', height: '50vh' }}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
                ref={(instance) => (mapRef.current = instance)}
                scrollZoom={false}
                minZoom={12}
            >
                <div>
                    <NavigationControl showCompass={false} position={'top-left'} />
                </div>
                <Marker  longitude={6.663080} latitude={53.407690} offsetLeft={-15} offsetTop={-17} anchor="bottom">

                   <ScissorsIcon className={`h-8 w-8 -rotate-45 text-pink-600`}/>
                </Marker>
            </Map>
        </div>
    );
};

export default HomeMap;
