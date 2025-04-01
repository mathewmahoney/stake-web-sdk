<script lang="ts">
	import { stateBet, stateBetDerived } from 'state-shared';
	import { OnHotkey } from 'components-shared';

	import { getContext } from '../context';
	import SimpleUiButton from './SimpleUiButton.svelte';

	const context = getContext();

	const disabled = $derived.by(
		() =>
			stateBet.isSpaceHold ||
			context.stateXstateDerived.isPlaying() ||
			!stateBetDerived.isBetCostAvailable(),
	);
	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressBet' });
		context.eventEmitter.broadcast({ type: 'bet' });
	};
	const betTextWithMode = $derived.by(() => {
		const mode = stateBetDerived.activeBetMode().mode;
		if (mode === 'BASE') return 'BET';
		return `${mode}\nBET`;
	});
</script>

<OnHotkey hotkey="Space" {disabled} {onpress} />

<SimpleUiButton
	{disabled}
	{onpress}
	text={betTextWithMode}
	x={context.stateLayoutDerived.canvasSizes().width - 75 * 3}
	y={context.stateLayoutDerived.canvasSizes().height}
	anchor={1}
/>
