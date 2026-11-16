<script>
	import { projects } from '$lib/content.js';
	import { reveal } from '$lib/actions/reveal.js';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import MothShowcase from '$lib/components/MothShowcase.svelte';

	const featured = projects.filter((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);
</script>

<section class="section" id="work" aria-labelledby="work-title">
	<div class="container">
		<header use:reveal>
			<p class="eyebrow"><span>01</span><span>/ Selected work</span></p>
			<h2 id="work-title" class="section-title">Things I've designed and built.</h2>
		</header>

		<div class="list">
			{#each featured as project (project.slug)}
				<ProjectCard {project}>
					{#snippet media()}
						{#if project.slug === 'moth-ui'}
							<MothShowcase />
						{/if}
					{/snippet}
				</ProjectCard>
			{/each}

			{#if rest.length}
				<div class="grid">
					{#each rest as project (project.slug)}
						<ProjectCard {project} />
					{/each}
				</div>
			{/if}
		</div>

		<p class="footnote mono" use:reveal>↳ This site is built with Moth UI too.</p>
	</div>
</section>

<style>
	header {
		margin-bottom: clamp(2.5rem, 5vw, 4rem);
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: var(--m-space-l);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
		gap: var(--m-space-l);
	}

	.footnote {
		margin-top: var(--m-space-l);
		font-size: var(--m-font-size-s);
		color: var(--m-color-text-weaker);
	}
</style>
