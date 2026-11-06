/**
 * Fades + lifts an element into view the first time it enters the viewport.
 * Pair with the [data-reveal] styles in app.css. Optional delay (ms) staggers siblings.
 *
 * @param {HTMLElement} node
 * @param {number} [delay]
 */
export function reveal(node, delay = 0) {
	node.dataset.reveal = '';
	node.style.setProperty('--reveal-delay', `${delay}ms`);

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -10% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
