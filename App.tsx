import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import SimpleValidator from "./src/SimpleValidator";
import { primaryColor } from "./src/styles";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <SimpleValidator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
    },
});
