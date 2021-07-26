import React from "react";
import Post from "../../components/feed-post/Post";
import Story from "../../components/story-section/Story";
import Navbar from "../Navbar/Navbar";

export default function Home() {
	return (
		<main className="Home">
			<Navbar />
			<Story />
			<Post />
		</main>
	);
}
