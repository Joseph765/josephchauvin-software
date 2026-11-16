<!-- Email as a mailto link, plus a Moth secondary button that copies it and confirms inline. -->
<script>
	import { Button } from 'moth-ui-svelte';
	import SocialIcon from './SocialIcon.svelte';

	/** @type {{ email: string, size?: 'm' | 'l' }} */
	let { email, size = 'm' } = $props();

	let copied = $state(false);
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let timer;

	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
			copied = true;
			clearTimeout(timer);
			timer = setTimeout(() => (copied = false), 2000);
		} catch {
			window.location.href = `mailto:${email}`;
		}
	}
</script>

<div class="copy-email is-{size}">
	<a class="address" href="mailto:{email}">{email}</a>
	<Button variant="secondary" type="button" onclick={copy} aria-label="Copy email address">
		<SocialIcon name={copied ? 'check' : 'copy'} size={16} />
		{copied ? 'Copied' : 'Copy'}
	</Button>
	<span class="visually-hidden" role="status" aria-live="polite">
		{copied ? 'Email address copied to clipboard' : ''}
	</span>
</div>

<style>
	.copy-email {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--m-space-s);
		min-width: 0;
	}

	.address {
		font-size: var(--m-font-size-l);
		color: var(--m-color-text);
		text-decoration: underline;
		text-decoration-color: var(--m-gray-7);
		text-underline-offset: 6px;
		transition: text-decoration-color 0.2s;
		overflow-wrap: anywhere;
	}

	.is-l .address {
		font-size: clamp(1.125rem, 2.5vw, 1.75rem);
	}

	@media (pointer: fine) {
		.address:hover {
			text-decoration-color: var(--m-accent-11);
		}
	}
</style>
