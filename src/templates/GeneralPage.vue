<template>
	<Layout>
		<article class="Page">
			<h1 class="Page__title">
				{{ $page.generalPage.title }}
			</h1>
			
			<Contents
				class="Page__body"
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
	
	.Page__title {
		font-family: var(--font-family-headers);
		font-size: fontsize(2);
		line-height: baseline(2);
		text-align: center;
	}
	
	.Page__body {
		margin-bottom: baseline(3);
	}
</style>
