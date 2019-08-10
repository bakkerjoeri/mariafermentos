<template>
	<Layout>
		<ul v-if="$page.allPost.edges.length">
			<li
				v-for="(post, index) in $page.allPost.edges"
				:key="index"
			>
				{{ post.node.title }}
			</li>
		</ul>
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
					body
				}
			}
		}
	}
</page-query>

<script>
export default {}
</script>

<style lang="scss">
	
</style>
