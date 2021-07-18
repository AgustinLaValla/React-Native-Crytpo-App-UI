import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../../constants/theme';
import dummyData from '../../../constants/dummy';

export default function Balance() {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, FONTS.h3]}>
                Your Portfolio Balance
            </Text>
            <Text style={[styles.balance, FONTS.h1]}>
                ${dummyData.portfolio.balance}
            </Text>
            <Text style={[styles.changes, FONTS.body5]}>
                ${dummyData.portfolio.changes} Last 24 hours
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: COLORS.white
    },

    balance: {
        marginTop: SIZES.base,
        color: COLORS.white
    },

    changes: {
        color: COLORS.white,
    }
});