<script lang="ts">
	import { Amount, type AmountProps } from 'components-pixi';
	import { stateBetDerived } from 'state-shared';

	import { i18nDerived } from '../i18n/i18nDerived';
	import { UI_TEXT_STYLES } from '../constants';

	const props: Partial<AmountProps> = $props();
	const amount = $derived.by(stateBetDerived.betCost);
	const label = $derived(stateBetDerived.activeBetMode()?.text.betAmountLabel || i18nDerived.bet());
</script>

<Amount
	{...props}
	{label}
	{amount}
	labelStyle={UI_TEXT_STYLES.labelStyle}
	amountStyle={UI_TEXT_STYLES.amountStyle}
/>
