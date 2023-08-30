import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { accentColor, activeOpacity, borderRadius, primaryColor, secondaryColor, spacingLarge, spacingMedium, spacingSmall, spacingXLarge, whiteColor } from "./styles";

const SimpleValidator = () => {
    const [input, setInput] = useState("");
    const isValid = false;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Montenegro IBAN validator</Text>
            <Text style={styles.text}>Please enter your Montenegro IBAN for validation:</Text>
            <TextInput
                value={input}
                onChangeText={setInput}
                style={styles.input}
                placeholder="MN..."
                placeholderTextColor={accentColor}
                autoCapitalize="characters"
            />

            <TouchableOpacity style={styles.buttonContainer} activeOpacity={activeOpacity}>
                <Text style={styles.buttonText}>VALIDATE</Text>
            </TouchableOpacity>

            <View style={styles.resultContainer}>
                <Text style={styles.text}>Entered IBAN is {isValid ? "valid" : "not valid"} !</Text>
            </View>
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
        marginTop: spacingLarge,
        borderRadius,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SimpleValidator;
