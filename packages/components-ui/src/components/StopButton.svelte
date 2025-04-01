<script lang="ts">
	import { stateBet } from 'state-shared';
	import { OnHotkey } from 'components-shared';

	import SimpleUiButton from './SimpleUiButton.svelte';
	import { getContext } from '../context';

	const context = getContext();

	let stopButtonDisabled = $state(false);

	const disabled = $derived.by(() => {
		if (context.stateXstateDerived.isAutoBetting()) return false;
		if (stateBet.isTurbo) return true;
		if (context.stateXstateDerived.isPlaying()) return stopButtonDisabled;
		return true;
	});
	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (context.stateXstateDerived.isAutoBetting()) {
			stateBet.autoSpinsCounter = 0;
		}
		context.eventEmitter.broadcast({ type: 'stopButtonClick' });
	};

	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => (stopButtonDisabled = true),
		stopButtonEnable: () => (stopButtonDisabled = false),
	});
</script>

{#if context.stateXstateDerived.isPlaying()}
	<OnHotkey hotkey="Space" {disabled} {onpress} />
{/if}

<SimpleUiButton
	{onpress}
	{disabled}
	text="STOP"
	x={context.stateLayoutDerived.canvasSizes().width - 75 * 2}
	y={context.stateLayoutDerived.canvasSizes().height}
	anchor={1}
/>
