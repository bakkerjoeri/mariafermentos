<template>
	<div class="Site">
		<header class="SiteHeader">
			<g-link
				class="SiteHeader__logo"
				to="/"
			>
				<img
					class="SiteHeader__logo-image"
					src="/images/logo.png"
				/>
				<h1 class="SiteHeader__title">
					mariafermentos
				</h1>
			</g-link>
			
			<nav class="SiteHeader__menu Menu">
				<ul class="Menu__items">
					<li class="Menu__item">
						<g-link
							class="Menu__link"
							to="/"
						>
							Home
						</g-link>
					</li>
					<li class="Menu__item">
						<g-link
							class="Menu__link"
							to="/workshops"
						>
							Workshops
						</g-link>
					</li>
					<li class="Menu__item">
						<g-link
							class="Menu__link"
							to="/about"
						>
							About
						</g-link>
					</li>
				</ul>
			</nav>
		</header>
		<main class="Site__main">
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
	
	.Site {
		max-width: var(--content-width);
		margin: baseline(1) auto 0;
		padding: 0 15px;
		font-size: fontsize(1);
		line-height: baseline(1);
		font-family: var(--font-family-body);
	}
	
	.SiteHeader__menu {
		margin-bottom: baseline(1);
	}
		
	.SiteHeader__logo {
		display: block;
		margin-bottom: baseline(1);
		color: inherit;
		text-decoration: none;
	}
	
	.SiteHeader__logo-image {
		display: block;
		height: 80px;
		margin: 0 auto;
		
		@include breakpoint(mobile-only) {
			display: none;
		}
	}
	
	.SiteHeader__title {
		margin-right: auto;
		margin-left: auto;
		font-size: fontsize(1.5);
		font-style: italic;
		font-family: var(--font-family-serif);
		font-weight: normal;
		line-height: baseline(1);
		
		@include breakpoint(phablet-up) {
			font-size: fontsize(2);
			line-height: baseline(2);
			
		}
	}
	
	.Site__main {
		margin-left: auto;
		margin-right: auto;
	}
	
	.Menu__items {
		display: flex;
		margin: 0;
		padding: 0;
		justify-content: center;
		list-style: none;
		border-top: 1px solid lightgray;
		border-bottom: 1px solid lightgray;
	}
	
	.Menu__item {
		font-family: var(--font-family-labels);
	}
	
	.Menu__link {
		display: block;
		padding: 10px 20px;
		color: inherit;
		text-decoration: none;
		
		&:hover, &:focus {
			text-decoration: underline;
		}
	}
	
	.Menu__link--active {
		font-weight: bold;
	}
</style>
