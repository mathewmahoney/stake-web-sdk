const config = {
	betModes: {
		base: {
			cost: 1,
			feature: true,
			ante: false,
			buyBonus: false,
			rtp: '97.0%',
			rtpNumber: 97.0,
			title: 'base',
			description: 'Standard game activated.',
			std: 7.17,
			bookLength: 10000,
		},
		ante: {
			cost: 1.25,
			feature: true,
			ante: true,
			buyBonus: false,
			rtp: '97.0%',
			rtpNumber: 97.0,
			title: 'DOUBLE CHANCE',
			icon: 'diceDouble',
			description: 'Activate to increase the chance of Free Spins.',
			std: 7.09,
			bookLength: 10000,
		},
		bonus: {
			cost: 100,
			feature: false,
			ante: false,
			buyBonus: true,
			rtp: '97.0%',
			rtpNumber: 97.0,
			title: 'BONUS BUY',
			icon: 'trophy',
			description: 'Guarantee 3, 4 or 5 Scatters on every spin.',
			std: 1.16,
			bookLength: 2000,
		},
		super: {
			cost: 200,
			feature: false,
			ante: false,
			buyBonus: true,
			rtp: '97.0%',
			rtpNumber: 97.0,
			title: 'SUPER BUY BONUS',
			icon: 'trophyStar',
			description:
				'Guarantee 3, 4 or 5 Scatters on every spin. Global multiplier in Free Spins does not reset between spins. ',
			std: 1.73,
			bookLength: 5000,
		},
		superSpin: {
			cost: 25,
			feature: true,
			ante: true,
			buyBonus: false,
			rtp: '97.0%',
			rtpNumber: 97.0,
			title: 'SUPER SPIN',
			icon: 'spinStar',
			description: 'Multiplier increases by 1x for every tumble event.',
			std: 2.68,
			bookLength: 5000,
		},
	},
	paddingReels: {
		baseGame: '',
		freeGame: '',
		superSpinGame: '',
	},
	winLevelMaps: {
		baseGame: {
			1: 0, // zero
			2: 0.01, // standard
			3: 1, // small
			4: 2, // nice
			5: 5, // substantial
			6: 15, // big
			7: 50, // superwin
			8: 100, // mega
			9: 250, // epic
			10: 5000, // max
		},
		freeGame: {
			1: 0, // zero
			2: 0.01, // standard
			3: 1, // small
			4: 2, // nice
			5: 5, // substantial
			6: 15, // big
			7: 50, // superwin
			8: 100, // mega
			9: 250, // epic
			10: 5000, // max
		},
		superSpinGame: {
			1: 0, // zero
			2: 0.01, // standard
			3: 1, // small
			4: 2, // nice
			5: 5, // substantial
			6: 15, // big
			7: 50, // superwin
			8: 100, // mega
			9: 250, // epic
			10: 5000, // max
		},
	},
};

export default config;
