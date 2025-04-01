<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { Amount, type AmountProps } from 'components-pixi';
	import { stateBet } from 'state-shared';

	import { UI_TEXT_STYLES } from '../constants';
	import { i18nDerived } from '../i18n/i18nDerived';

	const props: Partial<AmountProps> = $props();
	const balanceTween = new Tween(stateBet.balanceAmount);

	$effect(() => {
		balanceTween.set(stateBet.balanceAmount);
	});
</script>

<Amount
	{...props}
	label={i18nDerived.balance()}
	amount={balanceTween.current}
	labelStyle={UI_TEXT_STYLES.labelStyle}
	amountStyle={UI_TEXT_STYLES.amountStyle}
/>
