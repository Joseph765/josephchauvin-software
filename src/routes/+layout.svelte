<script>
	import 'moth-ui-svelte/css/index.css';
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}
