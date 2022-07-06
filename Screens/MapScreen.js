import React from 'react';
import { View, StyleSheet } from 'react-native';
import tw from 'twrnc';
import Map from '../Components/Map';
import Search from '../Components/Search';
import Ride from '../Components/RidePage';
import { createStackNavigator } from '@react-navigation/stack';


const MapScreen = () => {

    const stack2 = createStackNavigator();

    return(
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>

                <stack2.Navigator screenOptions={{headerTransparent: true, title: ""}}>
                    <stack2.Screen name='Search' component={Search} />
                    <stack2.Screen name='Ride' component={Ride} />
                </stack2.Navigator>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default MapScreen;

