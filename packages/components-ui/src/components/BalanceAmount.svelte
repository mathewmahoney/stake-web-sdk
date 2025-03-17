<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { stateBet } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import { getContext } from '../context';
	import SimpleUiAmount from './SimpleUiAmount.svelte';

	const context = getContext();

	const balanceTween = new Tween(stateBet.balanceAmount);

	$effect(() => {
		balanceTween.set(stateBet.balanceAmount);
	});
</script>

<SimpleUiAmount
	text={`BALANCE\n${numberToCurrencyString(balanceTween.current)}`}
	x={75 * 3}
	y={context.stateLayoutDerived.canvasSizes().height}
	anchor={1}
/>
