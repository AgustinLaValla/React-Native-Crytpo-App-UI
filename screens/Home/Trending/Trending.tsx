import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SIZES, COLORS, FONTS } from '../../../constants/theme';
import { TrendingCurrency } from '../../../types';
import TrendingItem from '../TrendingItem/TrendingItem';

type TrendingProps = {
    trending: TrendingCurrency[]
}


export default function Trending({ trending }: TrendingProps) {
    return (
        <View>
            <Text style={[styles.trending, FONTS.h2]}>
                Trending
            </Text>
            <FlatList
                contentContainerStyle={{ marginTop: SIZES.base, paddingBottom: 10 }}
                data={trending}
                renderItem={({ item, index }) => <TrendingItem item={item} index={index} />}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View >
    )
}


const styles = StyleSheet.create({

    trending: {
        marginLeft: SIZES.padding,
        color: COLORS.white,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
});