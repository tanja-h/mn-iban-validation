import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { accentColor, borderRadius, spacingHorizontal, spacingLarge, spacingSmall, whiteColor } from "./styles";
import { validateIBAN } from "./utils/utils";
import ValidationResult from "./ValidationResult";
import ValidationHistory from "./ValidationHistory";
import { Status, Validation } from "./utils/types";

const list: Validation[] = [
    { iban: "ME", status: Status.INVALID, date: new Date },
    { iban: "ME6876967858787", status: Status.VALID, date: new Date },
    { iban: "ME68769678587687", status: Status.INVALID, date: new Date },
    { iban: "ME6876967858697", status: Status.VALID, date: new Date },
    { iban: "ME687696785876987", status: Status.INVALID, date: new Date },
    { iban: "ME6879678576987", status: Status.INVALID, date: new Date },
    { iban: "ME68796785876987", status: Status.VALID, date: new Date },
    { iban: "ME68769678586987", status: Status.VALID, date: new Date },
    { iban: "ME6869678576987", status: Status.INVALID, date: new Date },
];


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

            {list.length > 0 ? (
                <ValidationHistory list={list} style={isResultVisible ? styles.margin : {}} />
            ) : null}
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
    margin: {
        marginTop: spacingLarge,
    },
});

export default ImprovedValidator;
