import React from 'react'
import { View, Text } from 'react-native'
import TextButton from '../../TextButton/TextButton'
import { styles } from './styles'
import { COLORS, FONTS } from '../../../constants/theme';

type Option = {
    id: number;
    label: string;
}

type ChartOptionsProps = {
    chartOptions: Option[],
    selectedOption: Option
}

export default function ChartOptions({ chartOptions, selectedOption }: ChartOptionsProps) {
    return (
        <View style={styles.container}>
            {chartOptions.map(option => (
                <TextButton
                    key={option.id}
                    label={option.label}
                    customContainerStyle={{
                        height: 30,
                        width: 60,
                        borderRadius: 15,
                        backgroundColor: selectedOption.id === option.id ? COLORS.primary : COLORS.lightGray
                    }}
                    customLabelStyle={{
                        color: selectedOption.id === option.id ? COLORS.white : COLORS.gray,
                        ...FONTS.body5
                    }}
                />
            ))}
        </View>
    )
}
