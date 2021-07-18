import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SIZES, COLORS, FONTS, icons } from '../../constants'
import { styles } from './styles';

type HomeBarProps = {
    showRightIcon?: boolean
}

export default function HeaderBar({ showRightIcon = false }: HomeBarProps) {

    const { goBack } = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.6}
                    onPress={() => goBack()}
                >
                    <Image
                        source={icons.back_arrow}
                        resizeMode="contain"
                        style={styles.arrowIcon}
                    />

                    <Text style={[styles.backText, FONTS.h2]}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>

            {
                showRightIcon &&
                
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => { }}>
                        <Image source={icons.star} resizeMode="contain" style={styles.rightIcon} />
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}
