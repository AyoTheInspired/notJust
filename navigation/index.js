import React from "react";
import FeedScreen from "../src/screens/FeedScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "../src/screens/CreatePostScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";
import UpdateProfileScreen from "../src/screens/UpdateProfileScreen";

const Navigatior = () => {
	const Stack = createNativeStackNavigator();
	// const navigation = useNavigation();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Feed"
					component={FeedScreen}
					options={({ navigation }) => ({
						headerRight: () => (
							<FontAwesome
								onPress={() => navigation.navigate("Profile")}
								name="user"
								size={24}
								color="gray"
							/>
						),
					})}
				/>
				<Stack.Screen name="Create Post" component={CreatePostScreen} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
				<Stack.Screen name="Update Profile" component={UpdateProfileScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigatior;
