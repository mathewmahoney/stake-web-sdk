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
	const smallest = $derived(stateConfig.betAmountOptions[0]);
	const disabled = $derived(
		!context.stateXstateDerived.isIdle() || stateBet.betAmount === smallest,
	);

	const onpressSingle = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		const nextSmaller = [...stateConfig.betAmountOptions]
			.sort((a, b) => b - a)
			.find((option) => option < stateBet.betAmount);

		stateBetDerived.setBetAmount(nextSmaller || smallest);
	};

	const onpressDouble = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'betAmountMenu' };
	};
</script>

<UiDoublePress {onpressSingle} {onpressDouble}>
	{#snippet children({ onpress })}
		<UiButton {...props} {sizes} {onpress} {disabled} icon="decrease" />
	{/snippet}
</UiDoublePress>
