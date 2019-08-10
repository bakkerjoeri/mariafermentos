<template>
	<div class="layout">
		<header>
			<h1>Mariafermentos</h1>
		</header>
		<main>
			<slot/>
		</main>
		<footer>
			
		</footer>
	</div>
</template>

<script>
	import Logo from "./../components/Logo.vue";
	
	export default {
		components: {
			Logo,
		},
	}
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
	}
	
	body {
		margin: 0;
	}
	
	.header {
		display: flex;
		background-color: #df5b57;
		justify-content: center;
		padding: 10px 20px;
	}
	
	.header__logo {
		width: 180px;
	}
</style>
