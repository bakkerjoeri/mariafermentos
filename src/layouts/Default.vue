<template>
	<div class="layout">
		<header>
			<g-link to="/"><h1>Mariafermentos</h1></g-link>
		</header>
		<main>
			<slot/>
		</main>
		<footer>
			
		</footer>
	</div>
</template>

<style lang="scss">
	* {
		box-sizing: border-box;
	}
	
	header {
		text-align: center;
	}
</style>
