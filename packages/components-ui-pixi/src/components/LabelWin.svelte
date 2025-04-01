<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { stateBet } from 'state-shared';
	import { Container } from 'pixi-svelte';
	import { AmountFadeProvider } from 'components-shared';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import UiLabel from './UiLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		tiled?: boolean;
		stacked?: boolean;
	};

	const props: Props = $props();

	const winBookEventAmountTween = new Tween(stateBet.winBookEventAmount);
	const value = $derived(bookEventAmountToCurrencyString(winBookEventAmountTween.current));

	$effect(() => {
		winBookEventAmountTween.set(stateBet.winBookEventAmount);
	});
</script>

<AmountFadeProvider amount={winBookEventAmountTween.current}>
	{#snippet children({ alpha })}
		<Container {alpha}>
			<UiLabel tiled={props.tiled} stacked={props.stacked} label={i18nDerived.win()} {value} />
		</Container>
	{/snippet}
</AmountFadeProvider>
