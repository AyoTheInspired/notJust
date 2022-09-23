import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const user = {
	id: "u1",
	image:
		"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
	name: "Ayo Abimbola",
};

const CreatePostScreen = () => {
	const [post, setPost] = useState("");
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState("");
	const navigation = useNavigation();

	const onSubmit = () => {
		navigation.goBack();
	};

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={[styles.container, { marginBottom: 10 }]}
			contentContainerStyle={{ flex: 1 }}>
			<View style={styles.header}>
				<Image
					source={{
						uri: user.image,
					}}
					style={styles.profileImage}
				/>
				<Text>{user.name}</Text>
				<Entypo
					onPress={pickImage}
					name="images"
					size={24}
					color="limegreen"
					style={styles.icon}
				/>
			</View>

			<TextInput
				placeholder="What is on your mind?"
				value={description}
				onChangeText={setDescription}
				multiline
			/>

			<Image source={{ uri: image }} style={styles.postImage} />

			<View style={styles.buttonContainer}>
				<Pressable
					onPress={onSubmit}
					style={{
						backgroundColor: "#2196F3",
						paddingVertical: 12,
						marginHorizontal: 8,
						borderRadius: 5,
					}}>
					<Text style={{ color: "white", textAlign: "center" }}>Post</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default CreatePostScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		padding: 10,
		paddingTop: 40,
		backgroundColor: "#fff",
	},

	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},

	profileImage: {
		height: 40,
		width: 40,
		borderRadius: 30,
		marginRight: 10,
	},

	name: {
		fontWeight: 500,
	},

	buttonContainer: {
		marginTop: "auto",
		marginVertical: 10,
	},

	icon: {
		marginLeft: "auto",
	},

	postImage: {
		width: "50%",
		aspectRatio: 4 / 3,
		alignSelf: "center",
		marginTop: 20,
	},
});
