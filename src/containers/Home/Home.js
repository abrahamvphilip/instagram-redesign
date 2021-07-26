import React from "react";
import Post from "../../components/feed-post/Post";
import NavbarTop from "../../components/navbar-top/NavbarTop";
import Story from "../../components/story-section/Story";

export default function Home() {
	return (
		<main className="Home">
			<NavbarTop />
			<Story />
			<Post />
		</main>
	);
}
