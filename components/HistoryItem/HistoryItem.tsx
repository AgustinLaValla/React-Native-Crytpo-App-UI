import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { icons } from '../../constants';
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { TransactionHistory } from '../../types';

type HistoryItemProps = {
    item: TransactionHistory
}

export default function HistoryItem({ item }: HistoryItemProps) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6}>
            <Image
                source={icons.transaction}
                style={styles.imageLeft}
            />
            <View style={{ flex: 1, marginHorizontal: SIZES.radius }}>
                <Text style={[FONTS.h3]} numberOfLines={1} ellipsizeMode="tail">
                    {item.description}
                </Text>
                <Text style={[styles.date, FONTS.body4]}>
                    {item.date}
                </Text>
            </View>

            <View style={styles.right}>
                <Text style={{ color: item.type === 'B' ? COLORS.green : COLORS.black, ...FONTS.h3 }}>
                    {item.amount} {item.currency}
                </Text>
                <Image source={icons.right_arrow} style={styles.imageRight} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SIZES.base
    },

    imageLeft: {
        width: 30,
        height: 30,
        tintColor: COLORS.primary
    },

    date: {
        color: COLORS.gray
    },

    right: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
    },

    imageRight: {
        width: 20,
        height: 20,
        tintColor: COLORS.gray
    }
});