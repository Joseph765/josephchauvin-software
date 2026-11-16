<script>
	import { reveal } from '$lib/actions/reveal.js';
	import LinkButton from './LinkButton.svelte';
	import SocialIcon from './SocialIcon.svelte';

	/**
	 * @typedef {{ value: string, label: string }} Stat
	 * @typedef {{ slug: string, title: string, featured?: boolean, tagline: string, description: string, role: string, stack: string[], highlights?: Stat[], links?: { docs?: string, code?: string } }} Project
	 */

	/** @type {{ project: Project, media?: import('svelte').Snippet }} */
	let { project, media } = $props();
</script>

<article class="card" class:featured={project.featured} use:reveal>
	<div class="body">
		<p class="role mono">{project.role}</p>
		<h3>{project.title}</h3>
		<p class="tagline">{project.tagline}</p>
		<p class="description">{project.description}</p>

		{#if project.highlights?.length}
			<dl class="stats">
				{#each project.highlights as stat (stat.label)}
					<div>
						<dt>{stat.label}</dt>
						<dd>{stat.value}</dd>
					</div>
				{/each}
			</dl>
		{/if}

		<ul class="stack" aria-label="Tech stack">
			{#each project.stack as tech (tech)}
				<li class="mono">{tech}</li>
			{/each}
		</ul>

		{#if project.links}
			<div class="links">
				{#if project.links.docs}
					<LinkButton href={project.links.docs} external size="m">
						View docs <SocialIcon name="arrow-up-right" size={16} />
					</LinkButton>
				{/if}
				{#if project.links.code}
					<LinkButton href={project.links.code} external variant="secondary" size="m">
						<SocialIcon name="github" size={16} /> Source
					</LinkButton>
				{/if}
			</div>
		{/if}
	</div>

	{#if media}
		<div class="media">{@render media()}</div>
	{/if}
</article>

<style>
	.card {
		display: grid;
		gap: var(--m-space-xl);
		padding: clamp(1.25rem, 3vw, 2.5rem);
		border: var(--hairline);
		border-radius: 20px;
		background: linear-gradient(180deg, var(--m-gray-2), var(--m-gray-1));
	}

	.card.featured {
		grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
	}

	.body {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--m-space-m);
	}

	.role {
		font-size: var(--m-font-size-s);
		color: var(--m-accent-11);
		letter-spacing: 0.04em;
	}

	h3 {
		font-size: var(--display-m);
		font-weight: var(--m-font-weight-black);
		letter-spacing: -0.03em;
		line-height: 1;
	}

	.tagline {
		font-size: var(--m-font-size-xl);
		line-height: 1.35;
		color: var(--m-color-text);
	}

	.description {
		font-size: var(--m-font-size-l);
		line-height: 1.6;
		color: var(--m-color-text-weak);
		max-width: 46ch;
	}

	.stats {
		display: flex;
		gap: clamp(1.5rem, 4vw, 2.5rem);
		margin: var(--m-space-s) 0;
	}

	.stats div {
		display: flex;
		flex-direction: column-reverse;
	}

	dd {
		margin: 0;
		font-size: var(--m-font-size-3xl);
		font-weight: var(--m-font-weight-black);
		letter-spacing: -0.03em;
		line-height: 1;
	}

	dt {
		margin-top: 6px;
		font-size: var(--m-font-size-s);
		color: var(--m-color-text-weaker);
	}

	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		list-style: none;
	}

	.stack li {
		padding: 4px 10px;
		border: var(--hairline);
		border-radius: var(--m-radius-full);
		font-size: var(--m-font-size-xs);
		color: var(--m-color-text-weak);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--m-space-s);
		margin-top: var(--m-space-s);
	}

	.media {
		min-width: 0;
	}

	@media (max-width: 60rem) {
		.card.featured {
			grid-template-columns: 1fr;
		}
	}
</style>
