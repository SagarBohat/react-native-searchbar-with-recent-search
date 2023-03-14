import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { globalStyle } from "../utilities/globalStyle";

const DetailPageUI = ({ selectedProduct = {}, navigation, route, ...props }) => {
    const { id = '', name = '' } = selectedProduct
    const { titleStyle } = style
    return (
        <View style={globalStyle.containerStyle} >
            <Text style={titleStyle}>Product id  : {id} </Text>
            <Text style={titleStyle} >Product name : {name} </Text>
        </View>
    )
}



const style = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold"
    }
})

export default React.memo(DetailPageUI)