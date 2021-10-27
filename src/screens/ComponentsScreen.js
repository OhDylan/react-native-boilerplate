import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi There!';
    return (
    <View>
        <Text style={styles.textStyle}>This is the component screen</Text>
        <Text>{greeting}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 10
    }
});

export default ComponentsScreen;