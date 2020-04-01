<template>
	<Layout>
		<div v-if="$page.allPost.edges.length" class="Posts">
			<PostPreview
				v-for="(post, index) in $page.allPost.edges"
				:key="index"
				:post="post.node"
			/>
		</div>
	</Layout>
</template>

<page-query>
	query Posts {
		allPost(filter: { isDraft: { eq: false }}) {
			edges {
				node {
					title
					introduction
					image (width: 690)
					date (format: "D MMMM YYYY")
					isDraft
					content
					path
				}
			}
		}
	}
</page-query>

<script>
	import PostPreview from '../components/PostPreview.vue';

	export default {
		components: {
			PostPreview
		}
	}
</script>

<style lang="scss">
	@import './../style/mixins/breakpoints.scss';

	.Posts {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 1fr;
		grid-gap: 20px;

		@include breakpoint(phablet-up) {
			grid-template-columns: 1fr 1fr;
			grid-gap: 30px;
		}

		@include breakpoint(tablet-up) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
