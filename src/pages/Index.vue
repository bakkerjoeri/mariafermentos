<template>
	<Layout>
		<div v-if="$page.allPost.edges.length" class="PostGrid">
			<g-link
				v-for="(post, index) in $page.allPost.edges"
				:key="index"
				:to="post.node.path"
				class="Post"
			>
				<img :src="post.node.image" />
				<h2>{{ post.node.title }}</h2>
				<div v-html="post.node.content" />
			</g-link>
		</div>
	</Layout>
</template>

<page-query>
	query Posts {
		allPost {
			edges {
				node {
					title
					image
					date
					content
					path
				}
			}
		}
	}
</page-query>

<script>
export default {}
</script>

<style lang="scss">
	.PostGrid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-rows: 1fr;
		grid-gap: 20px;
		padding: 20px;
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
	}

	.Post {
		img {
			max-width: 100%;
		}
	}
</style>
