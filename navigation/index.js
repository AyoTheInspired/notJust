import React from "react";
import FeedScreen from "../src/screens/FeedScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "../src/screens/CreatePostScreen";

const Navigatior = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Feed" component={FeedScreen} />
				<Stack.Screen name="Create Post" component={CreatePostScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigatior;
