import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
    image: {
        width: 25,
        height: 25,
        marginTop: 5
    },

    textWrapper: {
        marginLeft: SIZES.base
    },

    code: {
        color: COLORS.gray
    }
});