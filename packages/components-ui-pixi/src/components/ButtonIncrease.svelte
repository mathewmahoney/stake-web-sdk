<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateModal, stateBet, stateBetDerived, stateConfig } from 'state-shared';

	import UiButton from './UiButton.svelte';
	import UiDoublePress from './UiDoublePress.svelte';
	import { getContext } from '../context';
	import { UI_BASE_SIZE } from '../constants';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };
	const biggest = $derived(stateConfig.betAmountOptions[stateConfig.betAmountOptions.length - 1]);
	const disabled = $derived(!context.stateXstateDerived.isIdle() || stateBet.betAmount === biggest);

	const onpressSingle = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		const nextBigger = [...stateConfig.betAmountOptions]
			.sort((a, b) => a - b)
			.find((option) => option > stateBet.betAmount);

		stateBetDerived.setBetAmount(nextBigger || biggest);
	};

	const onpressDouble = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'betAmountMenu' };
	};
</script>

<UiDoublePress {onpressSingle} {onpressDouble}>
	{#snippet children({ onpress })}
		<UiButton {...props} {sizes} {onpress} {disabled} icon="increase" />
	{/snippet}
</UiDoublePress>
