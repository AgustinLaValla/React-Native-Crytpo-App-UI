import React from 'react'
import { View, Text, Animated } from 'react-native'
import { SIZES, COLORS } from '../../../constants/theme';
import { styles } from './styles';

type ChartDotsProps = {
    scrollX: Animated.Value;
    numberOfCharts: number[];
}

export default function ChartDots({ scrollX, numberOfCharts }: ChartDotsProps) {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
        <View style={{ marginTop: 15, height: 30 }}>
            <View style={styles.container}>
                {numberOfCharts.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                        extrapolate: 'clamp'
                    })

                    const dotColor = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
                        extrapolate: 'clamp'
                    })

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            style={{
                                borderRadius: SIZES.radius,
                                marginHorizontal: 6,
                                width: dotSize,
                                height: dotSize,
                                backgroundColor: dotColor,
                                opacity: opacity
                            }}
                        />
                    )
                })}
            </View>
        </View>
    )
}
