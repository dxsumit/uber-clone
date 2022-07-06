import React from 'react';
import { SafeAreaView, View, Text, Image,  StyleSheet } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../Components/NavOptions';


const Home = ({navigation}) => {

    return(
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-3`} >
                <Image 
                    style={{width: 90, height: 90, resizeMode: 'contain'}}
                    source={{uri: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"}}
                />

                <NavOptions navigation={navigation}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default Home;

