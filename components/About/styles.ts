import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.radius,
        padding: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
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

    description: {
        marginTop: SIZES.base
    }
});