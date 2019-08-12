<template>
	<Layout>
		<div v-if="$page.allPost.edges.length" class="Posts">
			<g-link
				v-for="(post, index) in $page.allPost.edges"
				:key="index"
				:to="post.node.path"
				class="PostPreview"
			>
				<div class="PostPreview__meta">
					Published on {{ post.node.date }}
				</div>
				<h2 class="PostPreview__title">
					{{ post.node.title }}
				</h2>
				<g-image
					class="PostPreview__image"
					:src="post.node.image"
				/>
				
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
					date (format: "D MMMM YYYY")
					content
					path
				}
			}
		}
	}
</page-query>

<style lang="scss">
	@import './../style/mixins/baseline.scss';
	@import './../style/mixins/fontsize.scss';
	@import './../style/mixins/breakpoints.scss';
	
	.PostPreview {
		display: block;
		margin-bottom: baseline(1);
		text-decoration: none;
		color: inherit;
		
		@include breakpoint(phablet-up) {
			margin-bottom: baseline(2);
		}
	}
	
	.PostPreview__image {
		display: block;
	}
	
	.PostPreview__title {
		font-family: var(--font-family-headers);
		font-size: fontsize(1.5);
		line-height: baseline(1.5);
		
		.PostPreview:hover &,
		.PostPreview:focus & {
			text-decoration: underline;
		}
		
		@include breakpoint(phablet-up) {
			font-size: fontsize(2);
			line-height: baseline(2);
		}
	}
	
	.PostPreview__meta {
		font-family: var(--font-family-labels);
		line-height: baseline(1);
	}
</style>
