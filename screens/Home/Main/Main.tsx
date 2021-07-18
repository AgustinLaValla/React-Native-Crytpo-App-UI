import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Trending from '../Trending/Trending';
import PriceAlert from '../../../components/PriceAlert/PriceAlert';
import Notice from '../Notice/Notice';
import { TransactionHistory, TrendingCurrency } from '../../../types';
import TransactionsHistory from '../../../components/TransactionsHistory/TransactionsHistory';

type MainProps = {
    trending: TrendingCurrency[];
    transactionHistory: TransactionHistory[];
}

export default function Main({ trending, transactionHistory }: MainProps) {
    return (
        <View style={styles.dataWrapper}>
            <Trending trending={trending} />
            <PriceAlert customContainerStyle={{ marginTop: 10 }} />
            <Notice />
            <TransactionsHistory transactionsHistory={transactionHistory} />
        </View>
    )
}


const styles = StyleSheet.create({
    dataWrapper: {
        transform: [{ translateY: -117 }]
    }
})