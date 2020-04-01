<template>
	<Layout>
		<article class="Post">
			<h1 class="Post__title">
				{{ $page.post.title }}
			</h1>
			
			<div class="Post__meta">
				Published on {{ $page.post.date }}
			</div>
			
			<Contents
				class="Post__body"
				:content="$page.post.content"
			/>
		</article>
		
	</Layout>
</template>

<script>
	import Contents from './../components/Contents.vue';
	
	export default {
		components: {
			Contents,
		}
	}
</script>

<page-query>
query Post ($path: String!) {
	post: post (path: $path) {
		title
		image
		path
		date (format: "D MMMM YYYY")
		content
	}
}
</page-query>

<style lang="scss">
	@import './../style/mixins/fontsize.scss';
	@import './../style/mixins/baseline.scss';
	@import './../style/mixins/breakpoints.scss';
	
	.Post {
		max-width: var(--content-width);
		margin: 0 auto;
	}

	.Post__title {
		margin-bottom: baseline(1);
		font-family: var(--font-family-headers);
		font-weight: 100;
		font-size: fontsize(2);
		line-height: baseline(2);
		text-align: center;
	}
	
	.Post__meta {
		margin-bottom: baseline(1);
		font-family: var(--font-family-labels);
		line-height: baseline(1);
		text-align: center;
	}
	
	.Post__main-visual {
		max-width: 100%;
		margin-bottom: baseline(1);
	}
	
	.Post__body {
		margin-bottom: baseline(3);
		font-size: var(--font-size);
		
		h1, h2, h3, h4, h5, h6 {
			margin-top: baseline(1);	
			font-family: var(--font-family-headers);
			line-height: baseline(2);
		}
		
		h2 {
			font-size: fontsize(1.5);
			line-height: baseline(2);
			
			@include breakpoint(phablet-up) {
				font-size: fontsize(2);
				line-height: baseline(2);
			}
		}
		
		h3 {
			font-size: fontsize(1.2);
		}
		
		h3 {
			font-size: fontsize(1.1);
		}
		
		h4 {
			font-size: fontsize(1);
		}
		
		p, ol, ul, blockquote {
			margin-bottom: baseline(0.75);
			font-family: var(--font-family-body);
			line-height: baseline(1);
		}
		
		ol, ul {
			margin-top: 0;
			padding-left: 1.25em;
		}
		
		img {
			display: block;
		}
	}
</style>
