import { StyleSheet } from "react-native";
import { SIZES, COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.green
    },

    label: {
        color: COLORS.white
    }
});