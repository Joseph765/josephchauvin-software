<!--
	Moth UI <Button> rendered as a link, with an `external` shorthand
	that opens in a new tab with safe rel attributes.
-->
<script>
	import { Button } from 'moth-ui-svelte';

	/** @type {{ href: string, variant?: 'default' | 'secondary' | 'tertiary', size?: 'm' | 'l', external?: boolean, children: import('svelte').Snippet, [key: string]: any }} */
	let { href, variant = 'default', size = 'l', external = false, children, ...rest } = $props();
</script>

<Button
	{href}
	{variant}
	{size}
	target={external ? '_blank' : undefined}
	rel={external ? 'external noopener noreferrer' : undefined}
	{...rest}
>
	{@render children()}
</Button>
