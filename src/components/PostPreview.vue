<template>
	<g-link
		:to="post.path"
		class="PostPreview"
	>
		<g-image
			class="PostPreview__image"
			:src="post.image"
		/>

		<h2 class="PostPreview__title">
			{{ post.title }}
		</h2>

		<p class="PostPreview__introduction">
			{{ post.introduction }}
		</p>
	</g-link>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		}
	}
}
</script>

<style lang="scss">
	@import './../style/mixins/baseline.scss';
	@import './../style/mixins/fontsize.scss';
	@import './../style/mixins/breakpoints.scss';
	
	.PostPreview {
		display: flex;
		flex-direction: column;
		height: 100%;
		text-decoration: none;
		color: inherit;
	}
	
	.PostPreview__image {
		display: block;
		margin-bottom: baseline(0.5);
	}
	
	.PostPreview__title {
		margin-bottom: baseline(0.5);
		font-family: var(--font-family-headers);
		font-weight: 100;
		font-size: fontsize(1.4);
		line-height: baseline(1.2);
		
		.PostPreview:hover &,
		.PostPreview:focus & {
			text-decoration: underline;
		}
	}
</style>
