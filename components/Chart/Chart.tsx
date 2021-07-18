import React from 'react'
import { View, Text, Animated } from 'react-native'
import { dummyData } from '../../constants'
import { TrendingCurrency } from '../../types'
import ChartBody from './ChartBody/ChartBody'
import ChartHeader from './ChartHeader/ChartHeader'
import { styles } from './styles'
import ChartOptions from './ChartOptions/ChartOptions';
import ChartDots from './ChartDots/ChartDots';

type Option = {
    id: number;
    label: string;
}

type ChartProps = {
    selectedCurrency?: TrendingCurrency | undefined;
}

export default function Chart({ selectedCurrency }: ChartProps) {

    const [chartOptions, setChartOptions] = React.useState(dummyData.chartOptions);
    const [selectedOption, setSelectedOption] = React.useState(chartOptions[0]);

    const numberOfCharts = [1, 2, 3];
    const scrollX = new Animated.Value(0);

    const onPressHandler = (option: Option) => setSelectedOption(option)

    return (
        <View style={styles.container}>
            <ChartHeader selecetedCurrency={selectedCurrency} />
            <ChartBody selectedCurreny={selectedCurrency} scrollX={scrollX} numberOfCharts={numberOfCharts} />
            <ChartOptions chartOptions={chartOptions} selectedOption={selectedOption}/>
            <ChartDots numberOfCharts={numberOfCharts} scrollX={scrollX}/>
        </View>
    )
}
