import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title="Forest" image="forest"/>
            <ImageDetail title="Beach" image="beach"/>
            <ImageDetail title="Mountain" image="mountain"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;