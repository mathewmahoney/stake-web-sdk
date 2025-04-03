export default {
	reveal: {
		index: 0,
		type: 'reveal' as const,
		board: [
			[
				{
					name: 'L2' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
			],
			[
				{
					name: 'L4' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'H5' as const,
				},
			],
			[
				{
					name: 'H4' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H3' as const,
				},
			],
			[
				{
					name: 'H2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'L1' as const,
				},
			],
			[
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'L3' as const,
				},
			],
			[
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'L4' as const,
				},
			],
		],
		paddingPositions: [86, 20, 51, 121, 58, 108],
		level: 'lvl_0' as const,
		gameType: 'baseGame' as const,
		anticipation: [0, 0, 0, 0, 0, 0],
	},
	setTotalWin: {
		type: 'setTotalWin',
		amount: 1000,
	},
	setTumbleWin: {
		index: 0,
		type: 'setTumbleWin' as const,
		amount: 1000,
	},
	finalWin: {
		type: 'finalWin',
		amount: 0,
	},
	clusterWin: {
		index: 0,
		type: 'clusterWin' as const,
		winInfo: [
			{
				win: 100.0,
				mult: 1,
				result: 100.0,
				reel: 3 as const,
				row: 3 as const,
			},
			{
				win: 100.0,
				mult: 2,
				result: 200.0,
				reel: 1 as const,
				row: 1 as const,
			},
		],
	},
	animateSymbols: {
		index: 0,
		type: 'animateSymbols' as const,
		symbolPositions: [
			{
				reel: 0,
				row: 3,
			},
			{
				reel: 0,
				row: 4,
			},
			{
				reel: 1,
				row: 3,
			},
			{
				reel: 1,
				row: 4,
			},
			{
				reel: 2,
				row: 1,
			},
			{
				reel: 3,
				row: 3,
			},
			{
				reel: 3,
				row: 4,
			},
			{
				reel: 4,
				row: 4,
			},
			{
				reel: 4,
				row: 5,
			},
		],
		reason: 'symbolWin',
	},
	tumbleBoardTest: {
		index: 0,
		type: 'tumbleBoard' as const,
		newSymbols: [
			[
				{
					name: 'S' as const,
				},
				{
					name: 'S' as const,
				},
			],
			[
				{
					name: 'S' as const,
				},
				{
					name: 'S' as const,
				},
			],
			[
				{
					name: 'S' as const,
				},
			],
			[
				{
					name: 'S' as const,
				},
				{
					name: 'S' as const,
				},
			],
			[
				{
					name: 'S' as const,
				},
				{
					name: 'S' as const,
				},
			],
			[],
		],
		oldBoard: [
			[
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
			],
			[
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
			],
			[
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
			],
			[
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
			],
			[
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
			],
			[
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
				{
					name: 'W' as const,
				},
			],
		],
		explodingSymbols: [
			{
				reel: 0,
				row: 3,
			},
			{
				reel: 0,
				row: 4,
			},
			{
				reel: 1,
				row: 3,
			},
			{
				reel: 1,
				row: 4,
			},
			{
				reel: 2,
				row: 1,
			},
			{
				reel: 3,
				row: 3,
			},
			{
				reel: 3,
				row: 4,
			},
			{
				reel: 4,
				row: 4,
			},
			{
				reel: 4,
				row: 5,
			},
		],
		level: 'lvl_0',
		board: [
			[
				{
					name: 'H5' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
			],
			[
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
			],
			[
				{
					name: 'L1' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'H4' as const,
				},
			],
			[
				{
					name: 'H3' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'H3' as const,
				},
			],
			[
				{
					name: 'H5' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'L4' as const,
				},
			],
			[
				{
					name: 'L4' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
			],
		],
		anticipation: false,
	},
	tumbleBoard: {
		index: 0,
		type: 'tumbleBoard' as const,
		newSymbols: [
			[
				{
					name: 'H5' as const,
				},
				{
					name: 'L2' as const,
				},
			],
			[
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
			],
			[
				{
					name: 'L1' as const,
				},
			],
			[
				{
					name: 'H3' as const,
				},
				{
					name: 'L1' as const,
				},
			],
			[
				{
					name: 'H5' as const,
				},
				{
					name: 'L2' as const,
				},
			],
			[],
		],
		oldBoard: [
			[
				{
					name: 'L2' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
			],
			[
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
			],
			[
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'H4' as const,
				},
			],
			[
				{
					name: 'L1' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'H3' as const,
				},
			],
			[
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
			],
			[
				{
					name: 'L4' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
			],
		],
		explodingSymbols: [
			{
				reel: 0,
				row: 3,
			},
			{
				reel: 0,
				row: 4,
			},
			{
				reel: 1,
				row: 3,
			},
			{
				reel: 1,
				row: 4,
			},
			{
				reel: 2,
				row: 1,
			},
			{
				reel: 3,
				row: 3,
			},
			{
				reel: 3,
				row: 4,
			},
			{
				reel: 4,
				row: 4,
			},
			{
				reel: 4,
				row: 5,
			},
		],
		level: 'lvl_0',
		board: [
			[
				{
					name: 'H5' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
			],
			[
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
			],
			[
				{
					name: 'L1' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'H4' as const,
				},
			],
			[
				{
					name: 'H3' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'H3' as const,
				},
			],
			[
				{
					name: 'H5' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'L4' as const,
				},
			],
			[
				{
					name: 'L4' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
			],
		],
		anticipation: false,
	},
	cumulativeTumble: {
		type: 'cumulativeTumble',
		amount: 1500,
	},
};
