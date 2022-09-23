import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigatior from "./navigation";

export default function App() {
	return (
		<View style={styles.container}>
			<Navigatior />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
