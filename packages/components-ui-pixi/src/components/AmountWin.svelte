<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { bookEventAmountToNormalisedAmount } from 'utils-shared/amount';
	import { AmountFadeProvider } from 'components-shared';
	import { Amount, type AmountProps } from 'components-pixi';
	import { stateBet } from 'state-shared';

	import { UI_TEXT_STYLES } from '../constants';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<AmountProps> = $props();
	const winBookEventAmountTween = new Tween(stateBet.winBookEventAmount);
	const amount = $derived(bookEventAmountToNormalisedAmount(winBookEventAmountTween.current));

	$effect(() => {
		winBookEventAmountTween.set(stateBet.winBookEventAmount);
	});
</script>

<AmountFadeProvider {amount}>
	{#snippet children({ alpha })}
		<Amount
			{...props}
			{alpha}
			{amount}
			label={i18nDerived.win()}
			labelStyle={UI_TEXT_STYLES.labelStyle}
			amountStyle={UI_TEXT_STYLES.amountStyle}
		/>
	{/snippet}
</AmountFadeProvider>
