import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles';
import { TrendingCurrency } from '../../types';
import { FONTS, SIZES } from '../../constants/theme';

type AboutProps = {
    selectedCurrency?: TrendingCurrency | undefined;
}

export default function About({ selectedCurrency }: AboutProps) {
    return (
        <View style={[styles.container, styles.shadow]}>
            <Text style={[FONTS.h3]}>
                About {selectedCurrency?.currency}
            </Text>

            <Text style={[styles.description, FONTS.h3]}>
                {selectedCurrency?.description}
            </Text>

        </View>
    )
}
