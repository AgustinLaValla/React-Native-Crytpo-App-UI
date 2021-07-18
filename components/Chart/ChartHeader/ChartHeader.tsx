import React from 'react'
import { View, Text } from 'react-native'
import { TrendingCurrency } from '../../../types';
import CurrencyLabel from '../../CurrencyLabel/CurrencyLabel';
import { styles } from './styles';
import { COLORS, FONTS } from '../../../constants/theme';

type ChartHeaderProps = {
    selecetedCurrency?: TrendingCurrency | undefined
}

export default function ChartHeader({ selecetedCurrency }: ChartHeaderProps) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <CurrencyLabel
                    icon={selecetedCurrency?.image}
                    currency={selecetedCurrency?.currency || ''}
                    code={selecetedCurrency?.code}
                />
            </View>
            <View>
                <Text style={[FONTS.h3]}>${selecetedCurrency?.amount}</Text>
                <Text style={{ color: selecetedCurrency?.type === 'I' ? COLORS.green : COLORS.red, ...FONTS.body3 }}>
                    {selecetedCurrency?.changes}
                </Text>
            </View>
        </View>
    )
}
