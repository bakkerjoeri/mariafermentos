<template>
	<Layout>
		<article class="Post">
			<h1 class="Post__title">
				{{ $page.post.title }}
			</h1>
			
			<div class="Post__meta">
				Published on {{ $page.post.date }}
			</div>
			
			<div
				class="Post__body"
				v-html="$page.post.content"
			/>
		</article?>
		
	</Layout>
</template>

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
	@import './../style/mixins/baseline.scss';
	
	.Post__title {
		font-family: var(--font-family-headers);
		font-size: calc(2 * #{var(--font-size)});
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
		font-size: var(--font-size);
		
		h1, h2, h3, h4, h5, h6 {
			margin-top: baseline(1);	
			font-family: var(--font-family-headers);
			line-height: baseline(2);
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
