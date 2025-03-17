import _ from 'lodash';

import { createPrimaryMachines, createIntermediateMachines, createGameActor } from 'utils-xstate';

import type { Bet } from './typesBookEvent';
import { playBet } from './utils';

const PrimaryMachines = createPrimaryMachines<Bet>({
	onResumeGameActive: (lastBetData) => lastBetData,
	onResumeGameInactive: () => {},
	onNewGameStart: async () => {},
	onNewGameError: () => {},
	onPlayGame: async (bet) => await playBet(bet),
	checkIsBonusGame: () => false,
});

const IntermediateMachines = createIntermediateMachines(PrimaryMachines);

export const gameActor = createGameActor(IntermediateMachines);
