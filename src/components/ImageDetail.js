import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const ImageDetail = ({title, image}) => {
    return(
        <View>
            <Image source={require('../../assets/beach.jpg')} />
        <Text>
            {title}
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;