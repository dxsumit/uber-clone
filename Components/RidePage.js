import React, {useEffect} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, selecttravelTimeInfo, setTravelTimeinfo } from "../Store/navSlice";
import { getDistance } from 'geolib';


const Ride = () => {

    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const travelTime = useSelector(selecttravelTimeInfo);

    useEffect(() => {

        const res = getDistance(
            { latitude: origin.lat, longitude: origin.long },
            { latitude: destination.lat, longitude: destination.long }
        );
        
        const distance = (res/1000).toFixed(2);
        const time = (res/40000).toFixed(2);
        const cost = (res/45).toFixed(2);
        dispatch(setTravelTimeinfo({
            time: time,
            cost: cost,
            distance: distance,
        }))

    }, []);


    const data = [{
        id: "#1",
        image: 'https://i.dlpng.com/static/png/6453338_preview.png',
        title: "UBER X",
        costFactor: 1,
    },
    {
        id: "#2",
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_837,h_558/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png',
        title: "UBER Sedan",
        costFactor: 1.5,
    },
    {
        id: "#3",
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_837,h_558/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png',
        title: "UBER XL",
        costFactor: 2,
    },
    ]


    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.renderContainer}>
                <Image 
                    style={{width: 120, height: 120, resizeMode: 'contain'}}
                    source={{uri: item.image}}
                    />
                <View>
                    <Text style={styles.rideTitleText}> {item.title} </Text>
                    <Text style={styles.rideDescText}> {travelTime?.time} hours travel time</Text>
                </View>
                <Text style={styles.priceText}> ₹ {(travelTime?.cost * item.costFactor).toFixed(2)} </Text>

            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}> Select a Ride - {travelTime?.distance} km</Text>
            </View>

            <FlatList 
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={ () => <View style={{backgroundColor:"#D0D0D0", height: 0.4}} />}
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#fff", 
        paddingHorizontal: 5
    },
    headerContainer: {
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 10
    },
    headerText: {
        fontSize: 17, 
        fontWeight: '600'
    },
    renderContainer: {
        height: 110, 
        flexDirection: 'row', 
        paddingHorizontal: 5,  
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    rideTitleText: {
        fontSize: 15, 
        fontWeight: '500'
    },
    rideDescText: {
        fontWeight: "300", 
        color: '#787878'
    },
    priceText: {
        fontSize: 15, 
        fontWeight: "600"
    }
});

export default Ride;

