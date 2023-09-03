import { FlatList, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { accentColor, borderRadius, secondaryColor, spacingLarge, spacingMedium, spacingSmall, whiteColor } from "./utils/styles";
import { Validation } from "./utils/types";
import ValidationItem from "./ValidationItem";

interface Props {
    style?: StyleProp<ViewStyle>;
    list: Validation[];
}

const ValidationHistory = ({ list, style }: Props) => (
    <View style={[styles.mainContainer, style]}>
        <Text style={styles.title}>Validation history</Text>

        <FlatList
            data={list}
            style={styles.container}
            keyExtractor={(item) => item.date.toISOString()}
            renderItem={({ item: { iban, isValid, date } }) => (
                <ValidationItem iban={iban} isValid={isValid} date={date} />
            )} />
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginBottom: spacingLarge,
    },
    container: {
        flex: 1,
        borderColor: accentColor,
        backgroundColor: whiteColor,
        borderRadius,
        marginTop: spacingMedium,
    },
    title: {
        marginLeft: spacingSmall,
        fontSize: 16,
        color: secondaryColor,
        fontWeight: "500",
    },
});

export default ValidationHistory;
