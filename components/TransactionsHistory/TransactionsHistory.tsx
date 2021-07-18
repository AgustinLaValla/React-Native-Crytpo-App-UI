import React from 'react'
import { View, Text, ViewStyle, StyleSheet, FlatList } from 'react-native';
import { TransactionHistory } from '../../types'
import { COLORS, SIZES, FONTS } from '../../constants'
import { transactionHistory } from '../../constants/dummy';
import HistoryItem from '../HistoryItem/HistoryItem';

type TransactionsHistoryProps = {
    transactionsHistory: TransactionHistory[];
    containerStyles?: ViewStyle
}

export default function TransactionsHistory({ transactionsHistory, containerStyles }: TransactionsHistoryProps) {

    return (
        <View style={[containerStyles, styles.container]}>
            <Text>Transaction History</Text>
            <FlatList
                contentContainerStyle={{ marginTop: SIZES.radius }}
                scrollEnabled={false}
                data={transactionHistory}
                renderItem={({ item }) => <HistoryItem item={item} />}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                    <View style={styles.separatorComponent} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
    },

    separatorComponent: {
        width: '100%',
        height: 1,
        backgroundColor: COLORS.lightGray
    }
});