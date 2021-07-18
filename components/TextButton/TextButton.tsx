import React from 'react'
import { View, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants'
import { styles } from './styles';

type TextButtonProps = {
    label: string;
    customContainerStyle?: ViewStyle,
    customLabelStyle?: TextStyle,
    onPress?: () => void
}

export default function TextButton({ label, customContainerStyle, customLabelStyle, onPress }: TextButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.container, customContainerStyle]}
            onPress={onPress ? onPress : () => { }}
            activeOpacity={0.6}
        >
            <Text style={[styles.label, FONTS.h3, customLabelStyle]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

