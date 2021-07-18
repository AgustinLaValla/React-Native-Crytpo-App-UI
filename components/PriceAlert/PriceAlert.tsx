import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ViewStyle } from 'react-native'
import { COLORS, SIZES, FONTS, icons } from '../../constants'

type PriceAlertProps = {
    customContainerStyle?: ViewStyle
}

export default function PriceAlert({ customContainerStyle }: PriceAlertProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.shadow, styles.container, customContainerStyle]}
        >
            <Image source={icons.notification_color} style={styles.image} />
            <View style={styles.alertContent}>
                <Text style={{ ...FONTS.h3 }}>
                    Set Price Alert
                </Text>
                <Text style={{ ...FONTS.body4 }}>
                    Get notified when your coins are moving
                </Text>
            </View>
            <Image source={icons.right_arrow} style={styles.arrowIcon}/>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
    },

    image: {
        width: 30,
        height: 30
    },

    alertContent: {
        flex: 1,
        marginLeft: SIZES.radius
    },

    arrowIcon: {
        width: 25,
        height: 25,
        tintColor: COLORS.gray
    }
});