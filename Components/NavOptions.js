import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const NavOptions = ({state, navigation}) => {

    const data = [{
            id: "#1",
            image: 'https://i.dlpng.com/static/png/6453338_preview.png',
            title: "Get a ride",
            screen: "MapScreen",
        },
        {
            id: "#2",
            image: 'https://pics.paypal.com/00/c/gifts/gb/ue.png',
            title: "Order food",
            screen: "EatScreen",
        },
    ]

    
    const renderItem = ({item}) => {
        return (<TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                    <View style={styles.navCard}>
                        <Image 
                            style={{width: 150, height: 150, resizeMode: 'contain'}}
                            source={{uri: item.image}}
                        />

                        <Text style={styles.navText} > {item.title}</Text>
                        <MaterialCommunityIcons name='arrow-right-circle' size={35} />
                    </View>
                </TouchableOpacity>);
    }
    
    

    return(
        <FlatList 
            horizontal
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
}

const styles = StyleSheet.create({
    navCard: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E0E0E0",
        padding: 13,
        margin: 3
    },  
    navText: {
        padding: 5,
        fontSize: 19,
        fontWeight: "700",
    }
})

export default NavOptions;

