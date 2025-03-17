import { createGetWinLevelDataByBookEventAmount } from 'utils-shared/winLevel';

import { winLevelMap } from './winLevelMap';
import type { GameType } from './types';
import config from './config';

export const stateGame = $state({
	gameType: 'baseGame' as GameType,
});

export const { getWinLevelDataByBookEventAmount } = createGetWinLevelDataByBookEventAmount({
	gameType: stateGame.gameType,
	winLevelMap,
	winLevelToBetAmountMultiplierThresholdMaps: config.winLevelMaps,
});

export const stateGameDerived = {
	getWinLevelDataByBookEventAmount,
};
