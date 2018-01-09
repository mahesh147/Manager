import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
    <View style={[styles.containerStyle, props.style]}>
        {props.children}
    </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#8b0285',
        position: 'relative'
    }
};

export { CardSection };
