import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../../constants/theme';

export default function Notice() {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, FONTS.h3]}>
                Investing Safety
            </Text>
            <Text style={[styles.content]}>
                It's very difficult to time an investment, especially when the market is volatile.
                Learn how to use dollar const averaging to your advantage.
            </Text>

            <TouchableOpacity activeOpacity={0.6} style={[styles.learnMoreWrapper]}>
                <Text style={[styles.learnMoreText, FONTS.h3]}>Learn More</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.secondary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8
    },

    title: {
        color: COLORS.white
    },

    content: {
        marginTop: SIZES.base,
        color: COLORS.white,
        lineHeight: 18
    },

    learnMoreWrapper: {
        marginTop: SIZES.base,
    },

    learnMoreText: {
        textDecorationLine: 'underline',
        color: COLORS.green,
    }
});