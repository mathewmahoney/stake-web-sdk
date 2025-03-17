<script lang="ts">
	import { OnHotkey } from 'components-shared';
	import { stateBet, stateBetDerived } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import { getContext } from '../context';
	import SimpleUiAmount from './SimpleUiAmount.svelte';

	const context = getContext();
	const disabled = $derived.by(context.stateXstateDerived.isPlaying);
	const updateBetAmountBy = (increase: number) =>
		stateBetDerived.updateBetAmount((value) => value + increase);

	const text = $derived.by(() => {
		const betCostString = numberToCurrencyString(stateBetDerived.betCost());
		if (stateBetDerived.activeBetMode().mode === 'BASE') return `BET\n${betCostString}`;
		const betAmountString = numberToCurrencyString(stateBet.betAmount);
		const costMultiplier = stateBetDerived.activeBetMode().costMultiplier;
		return `${betCostString}\n(${betAmountString}×${costMultiplier})`;
	});
</script>

<OnHotkey
	hotkey="ArrowUp"
	{disabled}
	onpress={() => {
		context.eventEmitter.broadcast({ type: 'soundButtonGeneral' });
		updateBetAmountBy(1);
	}}
	onhold={() => {
		context.eventEmitter.broadcast({ type: 'soundButtonGeneral' });
		updateBetAmountBy(10);
	}}
/>

<OnHotkey
	hotkey="ArrowDown"
	{disabled}
	onpress={() => {
		context.eventEmitter.broadcast({ type: 'soundButtonGeneral' });
		updateBetAmountBy(-1);
	}}
	onhold={() => {
		context.eventEmitter.broadcast({ type: 'soundButtonGeneral' });
		updateBetAmountBy(-10);
	}}
/>

<SimpleUiAmount
	{text}
	x={context.stateLayoutDerived.canvasSizes().width - 75 * 5}
	y={context.stateLayoutDerived.canvasSizes().height}
	anchor={1}
/>
