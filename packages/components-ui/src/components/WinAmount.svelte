<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { stateBet } from 'state-shared';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { getContext } from '../context';
	import SimpleUiAmount from './SimpleUiAmount.svelte';

	const context = getContext();

	const winBookEventAmountTween = new Tween(stateBet.winBookEventAmount);

	$effect(() => {
		winBookEventAmountTween.set(stateBet.winBookEventAmount);
	});
</script>

<SimpleUiAmount
	text={`WIN\n${bookEventAmountToCurrencyString(winBookEventAmountTween.current)}`}
	x={75 * 5 + 1}
	y={context.stateLayoutDerived.canvasSizes().height}
	anchor={1}
/>
