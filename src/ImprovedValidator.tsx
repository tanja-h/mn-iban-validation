import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { accentColor, borderRadius, spacingLarge, spacingSmall, whiteColor } from "./styles";
import { validateIBAN } from "./utils/utils";
import ValidationResult from "./ValidationResult";

const ImprovedValidator = () => {
    const [input, setInput] = useState("");
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const onChangeText = (text: string) => {
        setInput(text);
    };

    useEffect(() => {
        if (input.length === 0) setIsResultVisible(false);
        else setIsResultVisible(true);

        setIsValid(validateIBAN(input));
    }, [input]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Please enter your Montenegro IBAN for improved validation:
            </Text>
            <TextInput
                value={input}
                onChangeText={onChangeText}
                style={styles.input}
                placeholder="MN..."
                placeholderTextColor={accentColor}
                autoCapitalize="characters"
            />

            {isResultVisible ? <ValidationResult isValid={isValid} /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: spacingLarge,
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
});

export default ImprovedValidator;
