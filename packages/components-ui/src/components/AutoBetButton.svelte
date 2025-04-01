<script lang="ts">
	import { stateBet, stateBetDerived } from 'state-shared';

	import SimpleUiButton from './SimpleUiButton.svelte';
	import { getContext } from '../context';

	const context = getContext();

	const disabled = $derived.by(() => {
		if (!stateBetDerived.isBetCostAvailable()) return true;
		if (context.stateXstateDerived.isAutoBetting()) return false;
		return context.stateXstateDerived.isPlaying();
	});
	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBet.autoSpinsCounter = stateBet.autoSpinsCounter + 10;
		context.eventEmitter.broadcast({ type: 'autoBet' });
	};
</script>

<SimpleUiButton
	{disabled}
	{onpress}
	text={context.stateXstateDerived.isAutoBetting() ? stateBet.autoSpinsCounter : 'AUTO\nBET'}
	x={context.stateLayoutDerived.canvasSizes().width}
	y={context.stateLayoutDerived.canvasSizes().height}
	anchor={1}
/>
