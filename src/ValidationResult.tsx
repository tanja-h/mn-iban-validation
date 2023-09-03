import { StyleSheet, Text, View } from "react-native";
import { borderRadius, greenColor, redColor, spacingMedium, whiteColor } from "./styles";
import { AntDesign as Icon } from "@expo/vector-icons";

interface Props {
    isValid: boolean;
}

const ValidationResult = ({ isValid }: Props) => {
    const validationColor = isValid ? greenColor : redColor;

    return (
        <View style={styles.container} testID="result">
            <Icon name={isValid ? "checkcircle" : "closecircle"} size={24} color={validationColor} />
            <Text style={[styles.text, { color: validationColor }]}>
                Entered IBAN is
                {isValid ? " " : " not "}
                valid !
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: whiteColor,
        width: "100%",
        padding: spacingMedium,
        borderRadius,
        alignItems: "center",
    },
    text: {
        marginLeft: spacingMedium,
        fontSize: 18,
        color: greenColor,
        fontWeight: "600",
    },
});

export default ValidationResult;
