import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../../../constants';
import { SIZES } from '../../../constants/theme';

export default function HeaderBar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.notificatioBtn}
                onPress={() => console.log('Notification Pressed')}
                activeOpacity={0.6}
            >
                <Image source={icons.notification_white} resizeMode="contain" style={{ flex: 1 }} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.padding,
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: SIZES.padding
    },

    notificatioBtn: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
});