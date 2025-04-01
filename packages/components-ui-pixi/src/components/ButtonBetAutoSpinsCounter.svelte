<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { WHITE } from 'constants-shared/colors';

	type Props = {
		baseSize: number;
	};

	const props: Props = $props();

	const fontSizeMultiplier = $derived.by(() => {
		if (stateBet.autoSpinsCounter === Infinity) return 3;
		if (stateBet.autoSpinsCounter > 99) return 1.5;
		if (stateBet.autoSpinsCounter > 9) return 2;
		return 2.5;
	});
</script>

{#if stateBet.autoSpinsCounter > 0}
	<Text
		anchor={0.5}
		text={stateBet.autoSpinsCounter === Infinity ? '∞' : stateBet.autoSpinsCounter}
		style={{
			fontFamily: 'proxima-nova',
			fill: WHITE,
			fontWeight: 'bold',
			fontSize: fontSizeMultiplier * props.baseSize,
		}}
	/>
{/if}
