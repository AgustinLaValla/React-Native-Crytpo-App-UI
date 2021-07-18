import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles';
import CurrencyLabel from '../CurrencyLabel/CurrencyLabel';
import { StackRootNavigator, TrendingCurrency } from '../../types';
import { FONTS, SIZES } from '../../constants/theme';
import { icons } from '../../constants';
import TextButton from '../TextButton/TextButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type BuyProps = {
    selectedCurrency?: TrendingCurrency | undefined,
}

export default function Buy({ selectedCurrency }: BuyProps) {

    const { navigate } = useNavigation();

    return (
        <View style={[styles.container, styles.shadow]}>
            <View style={styles.headerWrapper}>
                <View>
                    <CurrencyLabel
                        icon={selectedCurrency?.image}
                        currency={`${selectedCurrency?.currency} Wallet`}
                        code={selectedCurrency?.code}
                    />
                </View>

                <View style={styles.amountContainer}>
                    <View style={{ marginRight: SIZES.base }}>
                        <Text style={[FONTS.h3]}>
                            ${selectedCurrency?.wallet.value}
                        </Text>
                        <Text style={[styles.amountCode, FONTS.body4]}>
                            {selectedCurrency?.wallet.crypto}
                            {selectedCurrency?.code}
                        </Text>
                    </View>

                    <Image
                        source={icons.right_arrow}
                        resizeMode="cover"
                        style={styles.image}
                    />
                </View>

            </View>

            <TextButton 
                label="Buy"
                onPress={() => navigate("Transaction", { currency: selectedCurrency })} 
            />
        </View>
    )
}
