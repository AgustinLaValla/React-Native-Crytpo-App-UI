import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: 10,
        flexDirection: 'row',
    },

    left: {
        flex: 1,
        alignItems: 'flex-start',
    },

    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    arrowIcon: {
        width: 25,
        height: 25,
        tintColor: COLORS.gray
    },

    backText: {
        marginLeft: SIZES.base
    },

    rightIcon: {
        width: 30,
        height: 30
    }
});