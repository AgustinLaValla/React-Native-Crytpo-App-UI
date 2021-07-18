import { StyleSheet } from "react-native";
import { SIZES, COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
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

    transactionHistoryWrapper: {
        marginVertical: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
    }
})
