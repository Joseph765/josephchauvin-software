<script>
	import { projects } from '$lib/content.js';
	import { reveal } from '$lib/actions/reveal.js';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Screenshot from '$lib/components/Screenshot.svelte';
	import VoltShowcase from '$lib/components/VoltShowcase.svelte';
	import stakeflowShot from '$lib/assets/stakeflow.png?w=1422;960;640&enhanced';
	import hillsShot from '$lib/assets/1000hills.png?w=1422;960;640&enhanced';

	/** Screenshots of each project's live site, keyed by slug. */
	const screenshots = {
		stakeflow: {
			src: stakeflowShot,
			alt: 'Stakeflow dashboard: balance chart, asset breakdown and a live crypto price table'
		},
		'1000hills': {
			src: hillsShot,
			alt: "1000 Hills Ministry home page: 'No one in Houston should face despair alone,' with Give today and Volunteer buttons"
		}
	};

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
						{#if project.slug === 'volt-ui'}
							<VoltShowcase />
						{/if}
					{/snippet}
				</ProjectCard>
			{/each}

			{#if rest.length}
				<div class="grid">
					{#each rest as project (project.slug)}
						{@const shot = screenshots[/** @type {keyof typeof screenshots} */ (project.slug)]}
						<ProjectCard {project}>
							{#snippet media()}
								{#if shot && project.links?.live}
									<Screenshot src={shot.src} alt={shot.alt} href={project.links.live} />
								{/if}
							{/snippet}
						</ProjectCard>
					{/each}
				</div>
			{/if}
		</div>

		<p class="footnote mono" use:reveal>
			↳ This site is built with Volt UI. The components in the Volt UI demo are live, so go ahead
			and click them.
		</p>
	</div>
</section>

<style>
	header {
		margin-bottom: clamp(2.5rem, 5vw, 4rem);
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: var(--v-space-l);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
		gap: var(--v-space-l);
	}

	.footnote {
		margin-top: var(--v-space-l);
		font-size: var(--v-font-size-s);
		color: var(--v-color-text-weaker);
	}
</style>
