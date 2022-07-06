import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from "../Store/navSlice";
import { setOrigin, setDestination } from '../Store/navSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Search = ({navigation}) => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const dispatch = useDispatch();
    const [pickUp, setPickUp] = useState(null);
    const [drop, setDrop] = useState(null);
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        if(origin && destination){
            setReady(true);
        }
    }, [origin, destination]);

    const getMarkers =  async (text, type) => {
        
        try{
            // here link is the api...
            const url = link + text;
            const response = await fetch(url)
            const json = await response.json();
            const _coordinate = json.features[0].geometry.coordinates;
            
            if(type === 'origin'){
                dispatch(setOrigin({
                    lat: _coordinate[1], 
                    long: _coordinate[0],
                    title: 'Origin',
                }))
            } else{
                dispatch(setDestination({
                    lat: _coordinate[1], 
                    long: _coordinate[0],
                    title: 'Destination',
                }))
            }

        } catch (err){
            console.log(err);
        }
    }


    return (
        <View style={{flex: 1, marginTop: 30}}>

            <View style={styles.location}>
                <Text style={styles.secondryText}> Enter pick-up Point </Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Enter your pick-up point'
                    value={pickUp}
                    onChangeText={setPickUp}
                    onSubmitEditing={(event) => getMarkers( event.nativeEvent.text, 'origin' )} />

            </View>     

            <View style={styles.location}>
                <Text style={styles.secondryText}> Set Your Destination Point </Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Set Destination'
                    value={drop}
                    onChangeText={setDrop}
                    onSubmitEditing={(event) => getMarkers( event.nativeEvent.text, 'destination' )} />
            </View>

            <View style={styles.rideContainer}>
                <TouchableOpacity disabled={!isReady} style={styles.btn} onPress={() => navigation.navigate('Ride')}>
                    <View style={styles.rideBtn}>
                        <MaterialCommunityIcons name='car-arrow-right' size={30} color="#fff" />
                        <Text style={styles.btnText}> Select Ride </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#282C35",
        width: 170,
        borderRadius: 30,
    },  
    btnText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: '600',
    },  
    input: {
        fontSize: 15,
        padding: 11,
        borderRadius: 30,
        backgroundColor: "#DCDCDC",
    },
    location: {
        padding: 15,
        paddingHorizontal: 20
    },
    rideContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },

    rideBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }, 
    secondryText: {
        fontSize: 16,
        fontWeight: '600',
        padding: 5,
    },

});

export default Search;

