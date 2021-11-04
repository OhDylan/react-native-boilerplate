import React, { useReducer } from 'react';
import { StyleSheet, View, Button, Text, TextInput} from 'react-native';
import { useState } from 'react/cjs/react.development';

const TextScreen = () => {
    const [name, setName] = useState("");

    return (
        <View>
            <Text>Enter Username:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)} 
            />
            <Text>My name is {name}</Text>
            {name.length < 4 ? <Text>Username must be at least 4 characters</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;