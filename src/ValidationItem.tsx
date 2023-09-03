import { StyleSheet, Text, View } from "react-native";
import { accentColor, greenColor, primaryColor, redColor, spacingMedium, spacingSmall, whiteColor } from "./styles";
import { Status, Validation } from "./utils/types";

const ValidationItem = ({ iban, status, date }: Validation) => (
    <View key={iban} style={styles.mainContainer}>
        <Text style={styles.iban}>{iban}</Text>

        <View style={styles.container}>
            <Text style={[styles.status, { color: status === Status.VALID ? greenColor : redColor }]}>
                {status}
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
        fontSize: 16,
        marginBottom: spacingSmall,
        fontWeight: "700",
    },
    status: {
        fontSize: 14,
        color: whiteColor,
        fontWeight: "500",
    },
    date: {
        color: accentColor,
    },
});

export default ValidationItem;
