import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		slides: [
			{ text: 'RANDOM\nTEXT', videoSrc: 'x2.mp4' },
			{ text: 'XXX', videoSrc: 'x1.mp4' },
			{ text: 'YYY', videoSrc: 'x3.mp4' },
			{ text: 'ZZZ', videoSrc: 'x4.mp4' },
		],
	};
};
