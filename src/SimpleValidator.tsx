import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import {
    accentColor, activeOpacity, borderRadius, greenColor, primaryColor, redColor,
    secondaryColor, spacingLarge, spacingMedium, spacingSmall, spacingXLarge, whiteColor
} from "./styles";
import { validateIBAN } from "./utils/utils";
import { AntDesign as Icon } from "@expo/vector-icons";

const SimpleValidator = () => {
    const [input, setInput] = useState("");
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const validationColor = isValid ? greenColor : redColor;

    const onChangeText = (text: string) => {
        setIsResultVisible(false);
        setInput(text);
    };

    const onValidate = () => {
        setIsValid(validateIBAN(input));
        setIsResultVisible(true);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Montenegro IBAN validator</Text>
            <Text style={styles.text}>Please enter your Montenegro IBAN for validation:</Text>
            <TextInput
                value={input}
                onChangeText={onChangeText}
                style={styles.input}
                placeholder="MN..."
                placeholderTextColor={accentColor}
                autoCapitalize="characters"
            />

            <TouchableOpacity
                onPress={onValidate}
                style={styles.buttonContainer}
                activeOpacity={activeOpacity}
                testID="validate-button"
            >
                <Text style={styles.buttonText}>VALIDATE</Text>
            </TouchableOpacity>

            {isResultVisible ? (
                <View style={styles.resultContainer} testID="result">
                    <Icon name={isValid ? "checkcircle" : "closecircle"} size={24} color={validationColor} />
                    <Text style={[styles.resultText, { color: validationColor }]}>Entered IBAN is {isValid ? "valid" : "not valid"} !</Text>
                </View>
            ) : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        alignItems: "center",
        paddingHorizontal: spacingLarge,
    },
    title: {
        marginTop: spacingLarge,
        marginBottom: spacingXLarge,
        fontSize: 20,
        fontWeight: "500",
        color: secondaryColor,
    },
    text: {
        width: "100%",
        fontSize: 18,
        color: whiteColor,
    },
    input: {
        marginVertical: spacingLarge,
        borderWidth: 1,
        borderColor: whiteColor,
        height: 40,
        width: "100%",
        paddingHorizontal: spacingSmall,
        color: whiteColor,
        borderRadius,
    },
    buttonContainer: {
        padding: spacingMedium,
        backgroundColor: secondaryColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius,
    },
    buttonText: {
        color: primaryColor,
        lineHeight: 20,
        fontSize: 18,
        fontWeight: "600",
    },
    resultContainer: {
        flexDirection: "row",
        backgroundColor: whiteColor,
        width: "100%",
        padding: spacingMedium,
        marginTop: spacingLarge,
        borderRadius,
        alignItems: "center",
    },
    resultText: {
        marginLeft: spacingMedium,
        fontSize: 18,
        color: greenColor,
        fontWeight: "600",
    },
});

export default SimpleValidator;
