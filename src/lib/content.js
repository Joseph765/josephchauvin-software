// Single source of truth for the site's copy.
// Source: static/joseph-chauvin-resume.pdf (2026 resume).

export const profile = {
	name: 'Joseph Chauvin',
	role: 'Frontend engineer',
	headline:
		'Frontend engineer building design systems and real-time dashboards. 3+ years shipping for Foundry Digital and Yuma.',
	location: 'Houston, TX',
	focus: ['Svelte', 'React', 'Design Systems'],
	email: 'joseph.chauvin102@gmail.com',
	available: true,
	resume: {
		href: '/joseph-chauvin-resume.pdf',
		filename: 'Joseph Chauvin Resume.pdf'
	},
	links: {
		github: 'https://github.com/Joseph765',
		linkedin: 'https://www.linkedin.com/in/josephchauvin/'
	}
};

export const bio = [
	"I'm a front-end engineer with 3+ years building scalable design systems and real-time dashboards used directly by leadership, in React, Next.js and SvelteKit.",
	'I care about the layer between design and code: tokens, components and the small interaction details that make an interface feel considered. SvelteKit is my favorite place to build.'
];

/** Set to false to hide the career-break row in the timeline. */
export const showGap = true;

export const experience = [
	{
		company: 'Yuma',
		role: 'Front End Software Engineer',
		dates: 'Jan 2025 — Apr 2025',
		context: 'Forefront of decentralized intelligence',
		highlights: [
			'Shipped the dTAO launch dashboard on a tight timeline, delivering accurate Bittensor chain data to leadership during a critical rollout.',
			'Led front-end architecture for an internal SvelteKit + Chart.js dashboard used daily by leadership, with auto-refreshing real-time data.'
		]
	},
	{
		company: 'Foundry Digital',
		role: 'Front End Software Engineer',
		dates: 'May 2022 — Dec 2024',
		context: 'Top Bitcoin mining pool in the United States',
		highlights: [
			'Led the company design system: adopted across multiple codebases and stacks, with hands-on integration support and a documentation site.',
			'Redesigned and launched a site map feature that lets users visualize mining operations with far more clarity.'
		]
	},
	{
		company: 'Hack Reactor',
		role: 'Software Engineering Immersive',
		dates: '2020',
		context: 'Full-stack JavaScript bootcamp',
		highlights: []
	}
];

export const gap = {
	dates: '2025 — 2026',
	label: 'Explored game audio design, now back to front-end with renewed focus.'
};

export const skills = [
	{
		group: 'Daily',
		items: [
			'Svelte 5',
			'SvelteKit',
			'React 19',
			'Next.js',
			'JavaScript',
			'TypeScript',
			'CSS / SCSS'
		]
	},
	{
		group: 'Craft',
		items: [
			'Design systems',
			'Design tokens',
			'Accessibility',
			'Responsive layout',
			'SVG',
			'Data viz (Chart.js)'
		]
	},
	{
		group: 'Tooling',
		items: ['Vite', 'Vercel', 'Lit', 'Webpack', 'Git', 'SSR']
	}
];

export const projects = [
	{
		slug: 'volt-ui',
		title: 'Volt UI',
		featured: true,
		tagline: 'A Svelte design system, built solo, end to end.',
		description:
			'Design tokens, accessible components and a documentation site for building consistent, high-quality interfaces fast. It keeps a UI cohesive without slowing anyone down.',
		role: 'Sole author: design, engineering, docs',
		stack: ['Svelte', 'SvelteKit', 'CSS custom properties', 'npm'],
		highlights: [
			{ value: '38', label: 'components' },
			{ value: '135', label: 'design tokens' },
			{ value: '6', label: 'color scales' }
		],
		links: {
			docs: 'https://volt-ui.com/getting-started',
			code: 'https://github.com/Joseph765/Volt-UI'
		}
	}
];
