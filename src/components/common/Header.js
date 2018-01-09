import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#8b0285',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 35,
        color: '#000000',
        marginLeft: 50
    }
};

export { Header };
