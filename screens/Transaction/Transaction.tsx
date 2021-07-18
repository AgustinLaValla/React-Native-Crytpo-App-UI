import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import CurrencyLabel from '../../components/CurrencyLabel/CurrencyLabel'
import TextButton from '../../components/TextButton/TextButton'
import TransactionsHistory from '../../components/TransactionsHistory/TransactionsHistory'
import { RouteProp } from '@react-navigation/native'
import { StackRootNavigator, TrendingCurrency } from '../../types'
import { styles } from './styles'
import Trade from '../../components/Trade/Trade';

type CryptoDetailsRouteProp = RouteProp<StackRootNavigator, 'Transaction'>

type TransactionType = {
    route: CryptoDetailsRouteProp
}

const Transaction = ({ route }: TransactionType) => {

    const [selectedCurrency, setSelectedCurrency] = React.useState<TrendingCurrency | undefined>();

    React.useEffect(() => {
        const { currency } = route.params;
        setSelectedCurrency(currency);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar showRightIcon={false} />
            <ScrollView style={{ flex: 1 }}>
                <Trade selectedCurrency={selectedCurrency} />
                <View style={styles.transactionHistoryWrapper}>
                    <TransactionsHistory
                        transactionsHistory={selectedCurrency?.transactionHistory || []}
                        containerStyles={{ paddingHorizontal: 0, alignSelf: 'center' }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Transaction;