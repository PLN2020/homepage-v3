import { useState } from "react"
import Map, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactMap = () => {
    const [viewState, setViewState] = useState({
        width: '100%',
        height: '100%',
        latitude: 45.5031824,
        longitude: -73.5698065,
        zoom: 9,
    })

    return (
        <Map
            {...viewState}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
            mapStyle="mapbox://styles/plnguyen/cla6glyzw000614mo1lhrx80x"
            onMove={evt => setViewState(evt.viewState)}
        >
            <Marker longitude={-73.5698065} latitude={45.5031824} color="black" />
        </Map>
    )
}

export default ContactMap