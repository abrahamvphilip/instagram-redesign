import React from "react";
import Post from "../../components/feed-post/Post";
import Story from "../../components/story-section/Story";

export default function Home() {
	return (
		<main className="Home">
			<Story />
			<Post />
		</main>
	);
}
