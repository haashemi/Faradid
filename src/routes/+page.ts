import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		slides: [
			{ text: 'XXX', videoSrc: 'x1.mp4' },
			{ text: 'YYY', videoSrc: 'x2.mp4' },
			{ text: 'ZZZ', videoSrc: 'x3.mp4' },
		],
	};
};
