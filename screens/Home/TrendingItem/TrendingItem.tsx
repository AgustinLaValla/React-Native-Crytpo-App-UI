import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { TrendingCurrency } from '../../../types'
import { SIZES, FONTS, COLORS } from '../../../constants/theme';
import { useNavigation } from '@react-navigation/native';

type TrendingItemProps = {
    item: TrendingCurrency;
    index: number;
}

export default function TrendingItem({ item, index }: TrendingItemProps) {

    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            style={[styles.trendingItem, index === 0 ? styles.firstItem : null]}
            onPress={() => navigate('CryptoDetail', { currency: item })}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.leftContainer}>
                    <Image source={item.image} style={styles.currencyImage} />
                </View>

                <View style={{ marginLeft: SIZES.base }}>
                    <Text style={{ ...FONTS.h2 }}>
                        {item.currency}
                    </Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                        {item.code}
                    </Text>
                </View>

            </View>
            <View style={styles.price}>
                <Text style={{ ...FONTS.h2 }}>
                    ${item.amount}
                </Text>
                <Text style={{ color: item.type === 'I' ? COLORS.green : COLORS.red }}>
                    ${item.changes}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    trendingItem: {
        width: 180,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        marginRight: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.white,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    firstItem: {
        marginLeft: SIZES.padding
    },

    leftContainer: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    currencyImage: {
        resizeMode: 'contain',
        marginTop: 5,
        height: 25
    },

    price: {
        marginTop: SIZES.radius
    }
});