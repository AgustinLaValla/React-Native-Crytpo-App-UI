import React from 'react'
import { View, Text } from 'react-native'
import CurrencyLabel from '../CurrencyLabel/CurrencyLabel'
import { styles } from './styles';
import { TrendingCurrency } from '../../types';
import { FONTS, COLORS, SIZES } from '../../constants/theme';
import TextButton from '../TextButton/TextButton';
import TransactionsHistory from '../TransactionsHistory/TransactionsHistory';

type TradeProps = {
    selectedCurrency?: TrendingCurrency | undefined
}

export default function Trade({ selectedCurrency }: TradeProps) {
    return (
        <View style={[styles.container, styles.shadow]}>
            <CurrencyLabel
                icon={selectedCurrency?.image}
                currency={selectedCurrency?.currency}
                code={selectedCurrency?.code}
            />

            <View style={styles.contentWrapper}>
                <Text style={[FONTS.h2]}>
                    {selectedCurrency?.wallet.crypto}
                    {selectedCurrency?.code}
                </Text>

                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                    ${selectedCurrency?.wallet.value}
                </Text>

                <TextButton
                    label="Trade"
                    onPress={() => console.log('Trade')}
                    customContainerStyle={{ width: '100%', marginTop: SIZES.padding }}
                />

            </View>
        </View>
    )
}
