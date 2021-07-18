import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.radius,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    }
});