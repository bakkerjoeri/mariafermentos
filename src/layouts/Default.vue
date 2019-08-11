<template>
	<div class="Page">
		<header class="Page__header">
			<g-link
				class="Page__home-link"
				to="/"
			>
				<img
					class="Page__logo"
					src="/images/logo.png"
				/>
				<h1 class="Page__title">
					maria fermentos
				</h1>
			</g-link>
		</header>
		<main class="Page__main">
			<slot/>
		</main>
		<footer>
			
		</footer>
	</div>
</template>

<style lang="scss">
	@import './../style/base.scss';
	@import './../style/mixins/breakpoints.scss';
	@import './../style/mixins/baseline.scss';
	@import './../style/mixins/fontsize.scss';
	
	* {
		box-sizing: border-box;
	}
	
	header {
		text-align: center;
	}
	
	.Page {
		max-width: var(--content-width);
		margin: 0 auto;
		padding-right: 15px;
		padding-left: 15px;
	}
	
	
	.Page__header {
		margin-top: baseline(1.5);
		margin-bottom: baseline(1);
	}
	.Page__logo {
		display: block;
		height: 80px;
		margin: 0 auto;
	}
	
	.Page__home-link {
		color: inherit;
		text-decoration: none;
	}
	
	.Page__title {
		margin-right: auto;
		margin-left: auto;
		font-size: fontsize(2);
		font-style: italic;
		line-height: baseline(2);
		
		@include breakpoint(tablet-up) {
			font-size: fontsize(3);
		}
	}
	
	.Page__main {
		margin-left: auto;
		margin-right: auto;
	}
</style>
