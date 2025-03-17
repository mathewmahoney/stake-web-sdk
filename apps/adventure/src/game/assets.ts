export default {
	pressToContinueText: {
		type: 'sprites',
		src: `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/sprites/pressToContinueText/MM_pressanywhere.json`,
		preload: true,
	},
	spineBoy: {
		type: 'spine',
		src: {
			skeleton:
				'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-pixi-examples/spineboy-pro.json',
			atlas:
				'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/spine-pixi-examples/spineboy-pma.atlas',
		},
		preload: true,
	},
	H2: {
		type: 'spine',
		src: {
			atlas: `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/spines/symbols/symbols.atlas`,
			skeleton: `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/spines/symbols/h2.json`,
			scale: 2,
		},
	},
	explosion: {
		type: 'spine',
		src: {
			atlas: `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/spines/symbols3/symbols3.atlas`,
			skeleton: `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/spines/symbols3/explosion.json`,
			scale: 2,
		},
	},
	goldFont: {
		type: 'font',
		src: `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/fonts/goldFont/mm_gold.xml`,
		preload: true,
	},
	bigwin: {
		type: 'spine',
		src: {
			atlas: `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/spines/bigwin/big_wins.atlas`,
			skeleton: `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/spines/bigwin/mm_bigwin.json`,
			scale: 2,
		},
		preload: true,
	},
} as const;
