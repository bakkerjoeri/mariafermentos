<template>
	<Layout>
		<article class="Post">
			<h1 class="Post__title">
				{{ $page.generalPage.title }}
			</h1>
			
			<Contents
				class="Post__body"
				:content="$page.generalPage.content"
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
query GeneralPage ($path: String!) {
	generalPage: generalPage (path: $path) {
		title
		content
	}
}
</page-query>

<style lang="scss">
	@import './../style/mixins/fontsize.scss';
	@import './../style/mixins/baseline.scss';
	@import './../style/mixins/breakpoints.scss';
	
	.Post__title {
		font-family: var(--font-family-headers);
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
	}
</style>
