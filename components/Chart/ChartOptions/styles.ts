import { StyleSheet } from "react-native";
import { SIZES } from '../../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});