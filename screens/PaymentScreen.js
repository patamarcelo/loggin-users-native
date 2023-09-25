import { StyleSheet, Text, View } from "react-native";

const PaymentScreen = () => {
	return (
		<View style={styles.mainContainer}>
			<Text>PaymentScreen</Text>
		</View>
	);
};

export default PaymentScreen;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 24
	}
});
