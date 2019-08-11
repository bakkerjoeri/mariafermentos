<template>
	<div
		class="Contents"
		v-html="content"
	/>
</template>

<script>
	export default {
		props: ['content'],
	}
</script>

<style lang="scss">
	@import './../style/mixins/fontsize.scss';
	@import './../style/mixins/baseline.scss';
	@import './../style/mixins/breakpoints.scss';

	.Contents {
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
