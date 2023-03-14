import { Platform, StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({
    shadowStyle: {
        borderWidth: 1.0,
        borderRadius: 8,
        shadowRadius: 8,
        borderColor: "#e7edf6",
        shadowColor: 'grey',
        backgroundColor: 'white',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 0.2,
        elevation: Platform.OS === 'ios' ? 0 : 3,
    },

    containerStyle: { flex: 1, alignItems: "center", justifyContent: 'center', }

})