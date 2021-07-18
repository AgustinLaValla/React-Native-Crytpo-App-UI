import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import { COLORS, SIZES, dummyData, FONTS } from '../../constants';
import Chart from '../../components/Chart/Chart';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackRootNavigator, TrendingCurrency } from '../../types';
import { RouteProp } from '@react-navigation/native';
import Buy from '../../components/Buy/Buy';
import About from '../../components/About/About';
import PriceAlert from '../../components/PriceAlert/PriceAlert';

type CryptoDetailsNavigationProp = StackNavigationProp<
    StackRootNavigator,
    'CryptoDetail'
>;

type CryptoDetailsRouteProp = RouteProp<StackRootNavigator, 'CryptoDetail'>

type CrytpDetailsProps = {
    navigation: CryptoDetailsNavigationProp,
    route: CryptoDetailsRouteProp
}


const CryptoDetail = ({ navigation, route }: CrytpDetailsProps) => {

    const [selectedCurrency, setSelectedCurrency] = React.useState<TrendingCurrency>();

    React.useEffect(() => {
        const { currency } = route.params;
        setSelectedCurrency(currency);
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
                <HeaderBar showRightIcon={true} />
                <Chart selectedCurrency={selectedCurrency} />
                <Buy selectedCurrency={selectedCurrency} />
                <About selectedCurrency={selectedCurrency} />
                <PriceAlert customContainerStyle={{marginTop: SIZES.padding}}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    wrapper: {
        flex: 1,
        paddingBottom: 40
    }
})

export default CryptoDetail;