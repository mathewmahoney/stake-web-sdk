<script lang="ts">
	import { stateBet, stateBetDerived, stateMeta } from 'state-shared';

	import { getContext } from '../context';
	import SimpleUiButton from './SimpleUiButton.svelte';

	const context = getContext();
	const betModeList = $derived(Object.values(stateMeta.betModeMeta));
	const betModeKey = $derived(stateBetDerived.activeBetMode().mode);

	let index = 0;
	const disabled = $derived.by(context.stateXstateDerived.isPlaying);
	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		index = index + 1;
		if (index > betModeList.length - 1) index = 0;
		const betModeKey = betModeList[index].mode;
		stateBet.activeBetModeKey = betModeKey;
		context.eventEmitter.broadcast({ type: 'soundBetMode', betModeKey });
	};
</script>

<SimpleUiButton
	{disabled}
	{onpress}
	text={betModeKey === 'BASE'
		? `  BUY \nBONUS`
		: `${betModeKey}\n${stateBetDerived.activeBetMode().costMultiplier}×`}
	x={context.stateLayoutDerived.canvasSizes().width - 75 * 5}
	y={context.stateLayoutDerived.canvasSizes().height}
	anchor={{ x: 0, y: 1 }}
/>
