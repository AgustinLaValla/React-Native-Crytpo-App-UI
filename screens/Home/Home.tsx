import React from 'react';
import { StyleSheet, ScrollView, LogBox } from 'react-native';
import { dummyData } from '../../constants';
import HomeHeader from './HomeHeader/HomeHeader';
import Main from './Main/Main';

const Home = ({ navigation }: any) => {

    const [trending] = React.useState(dummyData.trendingCurrencies);
    const [transactionHistory] = React.useState(dummyData.transactionHistory);

    React.useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])

    return (
        <ScrollView style={styles.container}>
            <HomeHeader trending={trending} />
            <Main trending={trending} transactionHistory={transactionHistory} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {
        flex: 1,
        paddingBottom: 10,
    },
})

export default Home;