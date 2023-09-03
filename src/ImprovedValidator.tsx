import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { accentColor, borderRadius, spacingHorizontal, spacingLarge, spacingSmall, spacingXLarge, whiteColor } from "./styles";
import { validateIBAN } from "./utils/utils";
import ValidationResult from "./ValidationResult";
import ValidationHistory from "./ValidationHistory";
import { Validation } from "./utils/types";

const ImprovedValidator = () => {
    const [input, setInput] = useState("");
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [history, setHistory] = useState<Validation[]>([]);

    const onChangeText = (text: string) => {
        setInput(text);
    };

    useEffect(() => {
        if (input.length === 0) setIsResultVisible(false);
        else {
            setIsResultVisible(true);
            const valid = validateIBAN(input);

            const validation: Validation = {
                iban: input,
                isValid: valid,
                date: new Date()
            };
            setIsValid(valid);
            setHistory(prevHistory => [validation, ...prevHistory]);
        }
    }, [input]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Please enter your Montenegro IBAN for an improved validation:
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

            <ValidationHistory list={history} style={isResultVisible ? styles.margin : {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    margin: {
        marginTop: spacingXLarge,
    },
});

export default ImprovedValidator;
