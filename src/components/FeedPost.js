import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LikeImage from "../../assets/images/like.png";
import {
	Entypo,
	AntDesign,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function FeedPost({ post }) {
	const navigation = useNavigation();

	return (
		<View style={styles.post}>
			{/* header */}

			<Pressable
				onPress={() => navigation.navigate("Profile", { id: post.postUserId })}
				style={styles.header}>
				<View style={styles.header}>
					<Image
						source={{
							uri: post.User.image,
						}}
						style={styles.profileImage}
					/>
					<View>
						<Text style={styles.name}>{post?.User.name}</Text>
						<Text style={styles.subtitle}>{post.createdAt}</Text>
					</View>
					<Entypo
						name="dots-three-horizontal"
						size={18}
						color="grey"
						style={styles.icon}
					/>
				</View>
			</Pressable>

			{/* body */}
			{post.description && (
				<Text style={styles.description}>{post.description}</Text>
			)}
			{post.image && (
				<Image
					source={{
						uri: post.image,
					}}
					style={styles.image}
				/>
			)}

			{/* footer */}

			<View style={styles.footer}>
				<View style={styles.statsRow}>
					<Image source={LikeImage} style={styles.likeIcon} />
					<Text style={styles.likedBy}>
						Elon Musk and {post.numberOfLikes} others
					</Text>
					<Text style={styles.shares}>{post.numberOfShares} shares</Text>
				</View>

				{/* buttons row */}
				<View style={styles.buttonsRow}>
					<View style={styles.iconButton}>
						<AntDesign name="like2" size={18} color="gray" />
						<Text style={styles.iconText}>Like</Text>
					</View>
					<View style={styles.iconButton}>
						<FontAwesome5 name="comment-alt" size={16} color="gray" />
						<Text style={styles.iconText}>Comment</Text>
					</View>
					<View style={styles.iconButton}>
						<MaterialCommunityIcons
							name="share-outline"
							size={20}
							color="gray"
						/>
						<Text style={styles.iconText}>Share</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	post: {
		width: "100%",
		marginVertical: 10,
		backgroundColor: "#fff",
	},

	header: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},

	name: {
		fontWeight: "600",
	},

	subtitle: {
		color: "gray",
	},

	icon: {
		marginLeft: "auto",
	},

	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 25,
		marginRight: 10,
	},

	description: {
		paddingHorizontal: 10,
		lineHeight: 20,
		letterSpacing: 0.3,
	},

	image: {
		width: "100%",
		aspectRatio: 4 / 3,
		marginTop: 10,
	},

	footer: {
		paddingHorizontal: 10,
	},

	statsRow: {
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: "gray",
	},

	likeIcon: {
		width: 20,
		height: 20,
		marginRight: 5,
	},

	likedBy: {
		color: "gray",
	},

	shares: {
		marginLeft: "auto",
		color: "gray",
	},

	iconButton: {
		flexDirection: "row",
		alignItems: "center",
	},

	buttonsRow: {
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-around",
	},

	iconText: {
		marginLeft: 5,
		color: "gray",
		fontWeight: "500",
	},
});
