<!-- A live, interactive sampler of real Volt UI components, framed as an app window. -->
<script>
	import { Badge, Banner, Button, Checkbox, Input, Toggle } from '$volt';

	let notify = $state(true);
	let clicks = $state(0);
</script>

<div class="window" role="group" aria-label="Live Volt UI component demo">
	<div class="chrome" aria-hidden="true">
		<span></span><span></span><span></span>
		<p class="mono">volt-ui.com · live components</p>
	</div>

	<div class="canvas">
		<div class="row">
			<Badge>Neutral</Badge>
			<Badge variant="success">Shipped</Badge>
			<Badge variant="info">Beta</Badge>
			<Badge variant="warning">Review</Badge>
		</div>

		<Banner variant="success">Your design tokens are in sync across 3 apps.</Banner>

		<div class="field">
			<Input name="demo-email" label="Work email" value="hello@company.com" expanded />
		</div>

		<div class="row split">
			<Checkbox name="demo-check" label="Use system theme" checked />
			<Toggle name="demo-toggle" label="Notifications" bind:checked={notify} />
		</div>

		<div class="row">
			<Button on:click={() => clicks++}>
				{clicks ? `Clicked ${clicks}×` : 'Primary'}
			</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="ghost">Ghost</Button>
		</div>
	</div>
</div>

<style>
	.window {
		border: var(--hairline);
		border-radius: 14px;
		background: var(--v-gray-2);
		overflow: hidden;
		box-shadow:
			0 0 0 1px color-mix(in srgb, var(--v-accent-9) 10%, transparent),
			0 40px 80px -30px color-mix(in srgb, var(--v-accent-9) 35%, transparent);
	}

	.chrome {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 12px 16px;
		border-bottom: var(--hairline);
		background: var(--v-gray-1);
	}

	.chrome span {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--v-gray-5);
	}

	.chrome p {
		margin-left: 10px;
		font-size: var(--v-font-size-xs);
		color: var(--v-color-text-weakest);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.canvas {
		display: flex;
		flex-direction: column;
		gap: var(--v-space-l);
		padding: clamp(1rem, 3vw, 2rem);
		background-image: radial-gradient(var(--v-gray-4) 1px, transparent 1px);
		background-size: 18px 18px;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--v-space-s);
	}

	.row.split {
		gap: var(--v-space-m) var(--v-space-xl);
	}

	.field {
		max-width: 22rem;
	}
</style>
