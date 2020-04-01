<template>
	<Layout>
		<article class="Page">
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
	
	.Page {
		max-width: var(--content-width);
		margin: 0 auto;
	}

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
