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

    headerWrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24
    },

    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    amountCode: {
        textAlign: 'right',
        color: COLORS.gray
    },

    image: {
        width: 20,
        height: 20,
        tintColor: COLORS.gray
    }
});