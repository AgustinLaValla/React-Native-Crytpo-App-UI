import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { images } from '../../../constants'
import { TrendingCurrency } from '../../../types'
import Balance from '../Balance/Balance'
import HeaderBar from '../HeaderBar/HeaderBar'
import Trending from '../Trending/Trending';

type HomeHeaderProps = {
    trending: TrendingCurrency[]
}

export default function HomeHeader({ trending }: HomeHeaderProps) {
    return (
        <ImageBackground
            source={images.banner}
            resizeMode="cover"
            style={{
                height: 290,
                alignItems: 'center',
            }}
        >
            <HeaderBar />
            <Balance />
        </ImageBackground>


    )
}
