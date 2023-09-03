import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {
    accentColor, activeOpacity, borderRadius, primaryColor, secondaryColor, spacingHorizontal,
    spacingLarge, spacingMedium, spacingSmall, whiteColor
} from "./utils/styles";
import { validateIBAN } from "./utils/utils";
import ValidationResult from "./ValidationResult";

const SimpleValidator = () => {
    const [input, setInput] = useState("");
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const onChangeText = (text: string) => {
        setIsResultVisible(false);
        setInput(text);
    };

    const onValidate = () => {
        setIsValid(validateIBAN(input));
        setIsResultVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please enter your Montenegro IBAN for a simple validation:</Text>
            <TextInput
                value={input}
                onChangeText={onChangeText}
                style={styles.input}
                placeholder="ME..."
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

            {isResultVisible ? <ValidationResult isValid={isValid} /> : null}

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: spacingHorizontal,
    },
    text: {
        width: "100%",
        fontSize: 16,
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
        marginBottom: spacingLarge,
        backgroundColor: secondaryColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius,
    },
    buttonText: {
        color: primaryColor,
        lineHeight: 20,
        fontSize: 16,
        fontWeight: "700",
    },
});

export default SimpleValidator;
