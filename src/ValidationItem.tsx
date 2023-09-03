import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { accentColor, getValidationColor, primaryColor, spacingMedium, spacingSmall, whiteColor } from "./styles";
import { Validation } from "./utils/types";

const ValidationItem = ({ iban, isValid, date }: Validation) => (
    <View key={iban} style={styles.mainContainer}>
        <Text style={styles.iban}>{iban}</Text>

        <View style={styles.container}>
            <Text style={[styles.status, { color: getValidationColor(isValid) }]}>
                {isValid ? "VALID" : "NOT VALID"}
            </Text>
            <Text style={styles.date}>{date.toLocaleString("en-GB")}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: spacingSmall,
        paddingHorizontal: spacingMedium,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: accentColor,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iban: {
        color: primaryColor,
        fontSize: 14,
        marginBottom: spacingSmall,
        fontWeight: "700",
    },
    status: {
        fontSize: 12,
        color: whiteColor,
        fontWeight: "500",
    },
    date: {
        fontSize: 12,
        color: accentColor,
    },
});

export default memo(ValidationItem);
