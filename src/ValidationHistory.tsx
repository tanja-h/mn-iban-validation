import { FlatList, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { accentColor, borderRadius, secondaryColor, spacingLarge, spacingMedium, spacingSmall, whiteColor } from "./styles";
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
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.date.toString()}
            renderItem={({ item: { iban, status, date } }) => (
                <ValidationItem iban={iban} status={status} date={date} />
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
        fontSize: 18,
        color: secondaryColor,
        fontWeight: "500",
    },
});

export default ValidationHistory;
