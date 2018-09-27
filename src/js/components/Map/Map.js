import React from 'react';
import styled from 'styled-components';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapContainer = styled.div`
    width: 35%;
    height: 100vh;
`;

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDx5_wiWk8RdCCEE2uxLm4eS252XMCnptc&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <MapContainer />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(({ markers }) =>
    <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 54.0919578, lng: -7.1853154 }}
    >
        { markers && markers.map(({ lat, lng, name }) => (
            <Marker 
                position={{ lat, lng }}
                title={name}
            />
        ))}
    </GoogleMap>
);

export default Map;