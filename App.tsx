import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Route, TabBar, TabView } from "react-native-tab-view";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import SimpleValidator from "./src/SimpleValidator";
import { accentColor, primaryColor, secondaryColor, spacingLarge, spacingXLarge } from "./src/styles";
import ImprovedValidator from "./src/ImprovedValidator";

const routes: Route[] = [
    { key: "simple", title: "Simple" },
    { key: "improved", title: "Improved" },
];

const renderScene = ({ route }: { route: Route }) => {
    switch (route.key) {
        case "simple":
            return <SimpleValidator />;
        case "improved":
            return <ImprovedValidator />;
        default:
            return null;
    }
};

const renderIcon = (route: Route, color: string) => {
    switch (route.key) {
        case "simple":
            return <MaterialIcons name="calculate" size={26} color={color} />;
        case "improved":
            return <Ionicons name="md-calculator" size={24} color={color} />;
        default:
            return null;
    }
};

export default function App() {
    const [index, setIndex] = useState(0);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>Montenegro IBAN validator</Text>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get("window").width }}
                swipeEnabled={false}
                tabBarPosition="bottom"
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        style={styles.tabBar}
                        labelStyle={styles.label}
                        indicatorStyle={styles.indicator}
                        activeColor={secondaryColor}
                        inactiveColor={accentColor}
                        renderIcon={({ color, route }) => renderIcon(route, color)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        marginTop: spacingLarge,
        marginBottom: spacingXLarge,
        fontSize: 20,
        fontWeight: "500",
        color: secondaryColor,
        alignSelf: "center",
    },
    tabBar: {
        backgroundColor: primaryColor,
        borderTopWidth: 2,
        borderTopColor: accentColor,
    },
    label: {
        textTransform: "uppercase",
        letterSpacing: 0.5,
        fontWeight: "500",
    },
    indicator: {
        backgroundColor: secondaryColor,
    },
});
