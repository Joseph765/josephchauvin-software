// Types for enhanced-img imports that carry extra directives,
// e.g. `portrait.jpg?w=1280;800;480&enhanced`. The package only declares `*?enhanced`.
declare module '*&enhanced' {
	import type { Picture } from 'vite-imagetools';

	const value: Picture;
	export default value;
}
