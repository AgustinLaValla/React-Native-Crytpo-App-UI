import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { FONTS } from '../../constants';
import { styles } from './styles';

type CurrencyLabelProps = {
    icon: ImageSourcePropType;
    currency: string | undefined;
    code: any
}

export default function CurrencyLabel({ icon, currency, code }: CurrencyLabelProps) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
                style={styles.image}
                source={icon}
                resizeMode="cover"
            />

            <View style={styles.textWrapper}>
                <Text style={[FONTS.h3]}>
                    {currency}
                </Text>
                <Text style={[styles.code, FONTS.body4]}>
                    {code}
                </Text>
            </View>
        </View>
    )
}
