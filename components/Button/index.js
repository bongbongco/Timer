import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Button({iconName, onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <FontAwesome name={iconName} size={80} color='white' />
        </TouchableOpacity>
    )
}

Button.propType = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};