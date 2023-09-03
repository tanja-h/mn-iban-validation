import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {
    accentColor, activeOpacity, borderRadius, primaryColor, secondaryColor, spacingHorizontal,
    spacingLarge, spacingMedium, spacingSmall, whiteColor
} from "./utils/styles";
import { suggestCorrectIBAN, validateIBAN } from "./utils/utils";
import ValidationResult from "./ValidationResult";

const SimpleValidator = () => {
    const [input, setInput] = useState("");
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [suggestion, setSuggestion] = useState("");

    const onChangeText = (text: string) => {
        setIsResultVisible(false);
        setInput(text);
        setSuggestion("");
    };

    const onValidate = () => {
        const valid = validateIBAN(input);
        setIsValid(valid);
        setIsResultVisible(true);
        if (input.length > 0 && !valid) {
            setSuggestion(suggestCorrectIBAN(input));
        } else setSuggestion("");
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

            <Text style={styles.suggestion}>
                {suggestion}
            </Text>

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
        marginTop: spacingLarge,
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
        marginVertical: spacingLarge,
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
    suggestion: {
        marginTop: spacingSmall,
        color: accentColor,
        alignSelf: "flex-start",
        paddingLeft: spacingSmall,
    }
});

export default SimpleValidator;
