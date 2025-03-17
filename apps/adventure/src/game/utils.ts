import { eventEmitter } from './eventEmitter';
import type { Bet } from './typesBookEvent';

export const playBet = async (bet: Bet) => {
	const amount = bet.state.find((bookEvent) => bookEvent.type === 'finalWin')?.amount || 0;

	await eventEmitter.broadcastAsync({ type: 'chestWin' });

	eventEmitter.broadcast({ type: 'chestHide' });
	eventEmitter.broadcast({ type: 'winShow' });
	await eventEmitter.broadcastAsync({ type: 'winUpdate', amount });
	eventEmitter.broadcast({ type: 'winHide' });

	eventEmitter.broadcast({ type: 'chestShow' });
	eventEmitter.broadcast({ type: 'chestReset' });
};
