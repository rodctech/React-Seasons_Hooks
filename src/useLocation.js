import {useState, useEffect} from 'react';


export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (err) => setErrorMessage(err.message)
        );
    }, []);

    return [lat, errorMessage];

    // return {lat: lat, errorMessage: errorMessage};
    // WE can use an Object or an Array for return,
    // Array is more common, but can run into errors later if adding to it.

};