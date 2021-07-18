import React from 'react'
import { View, Text, Animated } from 'react-native'
import { VictoryScatter, VictoryLine, VictoryChart, VictoryAxis } from 'victory-native'
import { SIZES } from '../../../constants'
import { VictoryCustomTheme } from '../../../styles'
import { COLORS } from '../../../constants/theme';
import { TrendingCurrency } from '../../../types';

type ChartBodyProps = {
    selectedCurreny?: TrendingCurrency | undefined;
    scrollX: Animated.Value;
    numberOfCharts: number[];
}

export default function ChartBody({ selectedCurreny, scrollX, numberOfCharts }: ChartBodyProps) {

    return (
        <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            snapToInterval={SIZES.width - 40}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            onScroll={Animated.event([
                { nativeEvent: { contentOffset: { x: scrollX } } },
            ],
                { useNativeDriver: false }
            )}
        >

            {numberOfCharts.map((item, index) => (

                <View key={index} style={{ marginLeft: index === 0 ? SIZES.base : 0 }}>


                    <View>
                        <VictoryChart
                            theme={VictoryCustomTheme}
                            height={220}
                            width={SIZES.width - 40}
                        >
                            <VictoryLine
                                style={{
                                    data: {
                                        stroke: COLORS.secondary
                                    },
                                    parent: {
                                        border: '1px solid #ccc'
                                    }
                                }}
                                data={selectedCurreny?.chartData || []}
                                categories={{
                                    x: ['15 MIN', '30 MIN', '45 MIN', '60 MIN'],
                                    y: ['15', '30', '45']
                                }}
                            />

                            <VictoryScatter
                                data={selectedCurreny?.chartData || []}
                                size={7}
                                style={{
                                    data: {
                                        fill: COLORS.secondary
                                    }
                                }}
                            />

                            <VictoryAxis
                                style={{
                                    grid: {
                                        stroke: 'transparent'
                                    }
                                }}
                            />

                            <VictoryAxis
                                dependentAxis
                                style={{
                                    axis: {
                                        stroke: 'transparent'
                                    },

                                    grid: {
                                        stroke: 'grey'
                                    }
                                }}
                            />
                        </VictoryChart>
                    </View>
                </View>
            ))}
        </Animated.ScrollView>
    )
}
