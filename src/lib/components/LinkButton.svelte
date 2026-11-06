<!--
	Anchor styled with Volt UI's button classes.
	Volt's <Button href> drops the `variant` prop (it always renders `is-link`),
	so link-buttons are rendered here with the correct variant class instead.
-->
<script>
	/** @type {{ href: string, variant?: 'default' | 'secondary' | 'ghost', size?: 'm' | 'l', external?: boolean, children: import('svelte').Snippet, [key: string]: any }} */
	let { href, variant = 'default', size = 'l', external = false, children, ...rest } = $props();
</script>

<a
	{href}
	class="v-button is-{variant} is-size-{size}"
	target={external ? '_blank' : undefined}
	rel="external noopener noreferrer"
	{...rest}
>
	{@render children()}
</a>
