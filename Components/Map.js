import React, {useEffect, useRef} from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../Store/navSlice';

const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect( () => {
        if(origin || destination){
            mapRef.current.fitToSuppliedMarkers(
                ["origin", "destination"],
                {edgePadding: {top: 70, bottom: 70, left: 70, right: 70 } },
            );
        }

    }, [origin, destination]);


    if(!origin){
        return (
            <ActivityIndicator style={styles.indicator} size="large" color="#2E2E2E" />
        );
    } else {

        return (
            <MapView style={{flex: 1}}
                ref={mapRef}
                initialRegion={{
                    latitude: origin.lat,
                    longitude: origin.long,
                    latitudeDelta: 0.0922/2.5,
                    longitudeDelta: 0.0421/2.5,
                }} >

                <Marker draggable
                    onDragEnd={(e) => {console.log(e.nativeEvent.coordinate)}}
                    key={origin.title}
                    coordinate={{latitude: origin.lat, longitude: origin.long}}
                    title={origin.title}
                    identifier='origin'
                />
                {destination && 
                    (<Marker
                        key={destination.title}
                        coordinate={{latitude: destination.lat, longitude: destination.long}}
                        title={destination.title}
                        identifier='destination'
                    />)
                }
    
            </MapView>
        );
    }
  
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    container: {
        height: 300,
        width: 300,
        backgroundColor: 'tomato'
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    map: {
        flex: 1
    },
    
});



export default Map;
