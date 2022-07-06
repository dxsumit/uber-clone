import React from 'react';
import { SafeAreaView, View, Text, Image,  StyleSheet } from 'react-native';
import tw from 'twrnc';


const EatScreen = () => {

    return(
        <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
            <Text> Hello this is EatScreen Page </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EatScreen;

