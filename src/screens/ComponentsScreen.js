import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is the componenet screen</Text>;
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 10
    }
});

export default ComponentsScreen;