import React, { useReducer } from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';

const BoxScreen = () => {


    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor:'red',
        alignSelf: 'center'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor:'red',
        alignSelf: 'flex-end'
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor:'flex-start',

    }
});

export default BoxScreen;