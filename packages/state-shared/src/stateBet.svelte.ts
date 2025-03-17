import type { BaseBet } from 'utils-bet';
import { stateMeta } from './stateMeta.svelte';

export type Currency = string;
export type LastBet = BaseBet | null;
export type BetModeKey = string;

export const stateBet = $state({
	currency: 'USD' as Currency,
	balanceAmount: 0,
	betAmount: 1,
	wageredBetAmount: 1,
	lastBet: null as LastBet,
	activeBetModeKey: 'BASE' as BetModeKey,
	betMode: {
		feature: false,
		costMultiplier: 1,
	},
	winBookEventAmount: 0,
	autoSpinsLoss: 0,
	autoSpinsCounter: 0,
	autoSpinsLossLimitAmount: Infinity,
	autoSpinsSingleWinLimitAmount: Infinity,
	isSpaceHold: false,
	isTurbo: false,
});

const correctBetAmount = (value: number) => {
	if (value <= 0) return 0;
	const costMultiplier =
		stateBetDerived.activeBetMode().type === 'activate'
			? stateBetDerived.activeBetMode().costMultiplier
			: 1;
	if (costMultiplier === 0) return 0;
	const max = stateBet.balanceAmount / costMultiplier;
	if (value >= max) return max;
	return value;
};

const updateBetAmount = (update: (value: number) => number) => {
	stateBet.betAmount = correctBetAmount(update(stateBet.betAmount));
};

let isTurboLocked = false;

const updateIsTurbo = (value: boolean, options: { persistent: boolean }) => {
	const { persistent } = options;

	if (!persistent && isTurboLocked) return;
	if (persistent) isTurboLocked = value;

	stateBet.isTurbo = value;
};

const activeBetMode = () => stateMeta.betModeMeta?.[stateBet.activeBetModeKey] || null;
const isContinuousBet = () => stateBet.autoSpinsCounter > 1 || stateBet.isSpaceHold;
const timeScale = () => (stateBet.isTurbo ? 2 : 1);
const betCost = () => stateBet.betAmount * activeBetMode().costMultiplier;
const isBetCostAvailable = () => betCost() > 0 && betCost() <= stateBet.balanceAmount;

export const stateBetDerived = {
	updateBetAmount,
	updateIsTurbo,
	activeBetMode,
	isContinuousBet,
	timeScale,
	betCost,
	isBetCostAvailable,
};
