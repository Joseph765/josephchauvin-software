<!-- Email as a mailto link, plus a copy button that confirms inline. -->
<script>
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
	<button type="button" class="copy" class:copied onclick={copy} aria-label="Copy email address">
		<SocialIcon name={copied ? 'check' : 'copy'} size={size === 'l' ? 18 : 16} />
		<span class="label">{copied ? 'Copied' : 'Copy'}</span>
	</button>
	<span class="visually-hidden" role="status" aria-live="polite">
		{copied ? 'Email address copied to clipboard' : ''}
	</span>
</div>

<style>
	.copy-email {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--v-space-s);
		min-width: 0;
	}

	.address {
		font-size: var(--v-font-size-l);
		color: var(--v-color-text);
		text-decoration: underline;
		text-decoration-color: var(--v-gray-7);
		text-underline-offset: 6px;
		transition: text-decoration-color 0.2s;
		overflow-wrap: anywhere;
	}

	.is-l .address {
		font-size: clamp(1.125rem, 2.5vw, 1.75rem);
	}

	.copy {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		height: 30px;
		padding-inline: 10px;
		border-radius: var(--v-radius-round);
		border: var(--hairline);
		background: var(--v-color-surface);
		color: var(--v-color-text-weak);
		font-family: var(--v-font-mono);
		font-size: var(--v-font-size-s);
		cursor: pointer;
		transition:
			color 0.2s,
			border-color 0.2s,
			background-color 0.2s;
	}

	.copy.copied {
		color: var(--v-success-11);
		border-color: var(--v-success-7);
		background: var(--v-success-3);
	}

	@media (pointer: fine) {
		.address:hover {
			text-decoration-color: var(--v-accent-11);
		}

		.copy:not(.copied):hover {
			color: var(--v-color-text);
			border-color: var(--v-gray-7);
		}
	}
</style>
