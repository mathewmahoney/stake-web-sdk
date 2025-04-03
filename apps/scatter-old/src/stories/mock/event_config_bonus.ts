export default {
	reveal: {
		type: 'reveal',
		board: [
			[
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H3',
				},
				{
					name: 'H3',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L2',
				},
			],
			[
				{
					name: 'H2',
				},
				{
					name: 'L3',
				},
				{
					name: 'H1',
				},
				{
					name: 'H1',
				},
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H3',
				},
			],
			[
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
				{
					name: 'H2',
				},
			],
			[
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'L3',
				},
				{
					name: 'S',
				},
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H1',
				},
			],
			[
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'S',
				},
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
			],
			[
				{
					name: 'H3',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'W',
				},
				{
					name: 'S',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
			],
		],
		paddingPositions: [31, 78, 123, 28, 16, 99],
		level: 'lvl_0',
		gameType: 'baseGame',
		anticipation: [0, 0, 0, 0, 0, 1],
	},
	clusterWin: {
		index: 127,
		type: 'clusterWin',
		winInfo: [
			{
				win: 200,
				mult: 1,
				result: 200,
				reel: 3,
				row: 2,
			},
			{
				win: 150,
				mult: 1,
				result: 150.0,
				reel: 2,
				row: 3,
			},
			{
				win: 400,
				mult: 1,
				result: 400,
				reel: 3,
				row: 4,
			},
			{
				win: 10,
				mult: 1,
				result: 10.0,
				reel: 2,
				row: 5,
			},
			{
				win: 10,
				mult: 1,
				result: 10.0,
				reel: 3,
				row: 1,
			},
		],
	},
	animateSymbols: {
		type: 'animateSymbols',
		symbolPositions: [
			{
				reel: 0,
				row: 1,
			},
			{
				reel: 1,
				row: 4,
			},
			{
				reel: 1,
				row: 5,
			},
			{
				reel: 3,
				row: 4,
			},
			{
				reel: 3,
				row: 5,
			},
			{
				reel: 4,
				row: 3,
			},
			{
				reel: 4,
				row: 4,
			},
			{
				reel: 5,
				row: 3,
			},
		],
		reason: 'symbolWin',
	},
	setTotalWin: {
		type: 'setTotalWin',
		amount: 1000,
	},
	setTumbleWin: {
		type: 'setTumbleWin',
		amount: 10,
	},
	tumbleBoard: {
		type: 'tumbleBoard',
		newSymbols: [
			[
				{
					name: 'L4',
				},
			],
			[
				{
					name: 'L2',
				},
				{
					name: 'H2',
				},
			],
			[],
			[
				{
					name: 'H4',
				},
				{
					name: 'H1',
				},
			],
			[
				{
					name: 'L2',
				},
				{
					name: 'L2',
				},
			],
			[
				{
					name: 'H3',
				},
			],
		],
		oldBoard: [
			[
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H3',
				},
				{
					name: 'H3',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L2',
				},
			],
			[
				{
					name: 'H2',
				},
				{
					name: 'L3',
				},
				{
					name: 'H1',
				},
				{
					name: 'H1',
				},
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H3',
				},
			],
			[
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
				{
					name: 'H2',
				},
			],
			[
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'L3',
				},
				{
					name: 'S',
				},
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H1',
				},
			],
			[
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'S',
				},
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
			],
			[
				{
					name: 'H3',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'W',
				},
				{
					name: 'S',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
			],
		],
		explodingSymbols: [
			{
				reel: 0,
				row: 1,
			},
			{
				reel: 1,
				row: 4,
			},
			{
				reel: 1,
				row: 5,
			},
			{
				reel: 3,
				row: 4,
			},
			{
				reel: 3,
				row: 5,
			},
			{
				reel: 4,
				row: 3,
			},
			{
				reel: 4,
				row: 4,
			},
			{
				reel: 5,
				row: 3,
			},
		],
		level: 'lvl_0',
		board: [
			[
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H3',
				},
				{
					name: 'H3',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L2',
				},
			],
			[
				{
					name: 'L2',
				},
				{
					name: 'H2',
				},
				{
					name: 'H2',
				},
				{
					name: 'L3',
				},
				{
					name: 'H1',
				},
				{
					name: 'H1',
				},
				{
					name: 'H3',
				},
			],
			[
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
				{
					name: 'H2',
				},
			],
			[
				{
					name: 'H4',
				},
				{
					name: 'H1',
				},
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'L3',
				},
				{
					name: 'S',
				},
				{
					name: 'H1',
				},
			],
			[
				{
					name: 'L2',
				},
				{
					name: 'L2',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'S',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
			],
			[
				{
					name: 'H3',
				},
				{
					name: 'H3',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'S',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
			],
		],
	},
	tumbleBoardAnticipated: {
		type: 'tumbleBoard',
		newSymbols: [
			[{ name: 'L3' }, { name: 'L3' }],
			[{ name: 'L3' }, { name: 'L1' }],
			[{ name: 'L1' }, { name: 'L3' }],
			[{ name: 'H4' }],
			[{ name: 'L1' }, { name: 'L1' }],
			[],
		],
		oldBoard: [
			[
				{ name: 'H2' },
				{ name: 'H2' },
				{ name: 'H1' },
				{ name: 'H1' },
				{ name: 'L4' },
				{ name: 'L4' },
				{ name: 'L4' },
			],
			[
				{ name: 'L1' },
				{ name: 'L4' },
				{ name: 'L4' },
				{ name: 'S' },
				{ name: 'L2' },
				{ name: 'L2' },
				{ name: 'L2' },
			],
			[
				{ name: 'L3' },
				{ name: 'L4' },
				{ name: 'L4' },
				{ name: 'H4' },
				{ name: 'H4' },
				{ name: 'H5' },
				{ name: 'H5' },
			],
			[
				{ name: 'H1' },
				{ name: 'H1' },
				{ name: 'L3' },
				{ name: 'L3' },
				{ name: 'S' },
				{ name: 'L4' },
				{ name: 'L4' },
			],
			[
				{ name: 'L3' },
				{ name: 'L3' },
				{ name: 'L4' },
				{ name: 'L4' },
				{ name: 'H4' },
				{ name: 'H4' },
				{ name: 'L3' },
			],
			[
				{ name: 'L1' },
				{ name: 'L1' },
				{ name: 'L1' },
				{ name: 'H4' },
				{ name: 'H4' },
				{ name: 'S' },
				{ name: 'H2' },
			],
		],
		explodingSymbols: [
			{ reel: 0, row: 4 },
			{ reel: 0, row: 5 },
			{ reel: 1, row: 1 },
			{ reel: 1, row: 2 },
			{ reel: 2, row: 1 },
			{ reel: 2, row: 2 },
			{ reel: 3, row: 5 },
			{ reel: 4, row: 2 },
			{ reel: 4, row: 3 },
		],
		level: 'lvl_0',
		board: [
			[
				{ name: 'L3' },
				{ name: 'L3' },
				{ name: 'H2' },
				{ name: 'H2' },
				{ name: 'H1' },
				{ name: 'H1' },
				{ name: 'L4' },
			],
			[
				{ name: 'L3' },
				{ name: 'L1' },
				{ name: 'L1' },
				{ name: 'S' },
				{ name: 'L2' },
				{ name: 'L2' },
				{ name: 'L2' },
			],
			[
				{ name: 'L1' },
				{ name: 'L3' },
				{ name: 'L3' },
				{ name: 'H4' },
				{ name: 'H4' },
				{ name: 'H5' },
				{ name: 'H5' },
			],
			[
				{ name: 'H4' },
				{ name: 'H1' },
				{ name: 'H1' },
				{ name: 'L3' },
				{ name: 'L3' },
				{ name: 'S' },
				{ name: 'L4' },
			],
			[
				{ name: 'L1' },
				{ name: 'L1' },
				{ name: 'L3' },
				{ name: 'L3' },
				{ name: 'H4' },
				{ name: 'H4' },
				{ name: 'L3' },
			],
			[
				{ name: 'L1' },
				{ name: 'L1' },
				{ name: 'L1' },
				{ name: 'H4' },
				{ name: 'H4' },
				{ name: 'S' },
				{ name: 'H2' },
			],
		],
		anticipation: true,
	},
	freeSpinTrigger: {
		index: 0,
		type: 'freeSpinTrigger' as const,
		totFS: 10,
		superBuy: false,
	},
	updateGlobalMult: {
		index: 0,
		type: 'updateGlobalMult' as const,
		globalMult: 2,
	},
	updateFreeSpin: {
		index: 0,
		type: 'updateFreeSpin' as const,
		amount: 1,
	},
	freeSpinEnd: {
		index: 0,
		type: 'freeSpinEnd' as const,
		amount: 8000.0,
	},
	finalWin: {
		type: 'finalWin',
		amount: 90,
	},
	bigWinAnimation: {
		type: 'bigWinAnimation',
		winLevel: 'lvl_2',
		win: 1500,
	},
	multiplierSplashScreen: {
		index: 0,
		type: 'multiplierSplashScreen' as const,
		multiplier: 15,
		actingOn: 1950.0,
		result: 13650.0,
		multiplierInfo: [
			{ reel: 1, row: 2, symbol: { name: 'M' as const, subtype: '5' }, currentTotalMult: 5 },
			{
				reel: 3,
				row: 2,
				symbol: { name: 'M' as const, subtype: '10' },
				currentTotalMult: 15,
			},
		],
	},
	cumulativeTumbleSmall: {
		index: 0,
		type: 'cumulativeTumble' as const,
		amount: 200,
	},
	cumulativeTumbleBig: {
		index: 0,
		type: 'cumulativeTumble' as const,
		amount: 1500,
	},
};
