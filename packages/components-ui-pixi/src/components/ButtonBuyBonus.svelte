<script lang="ts">
	import { Button, type ButtonProps } from 'components-pixi';
	import { stateModal, stateBet, stateBetDerived } from 'state-shared';

	import ButtonBuyBonusSpine from './ButtonBuyBonusSpine.svelte';
	import { UI_BASE_SIZE } from '../constants';
	import { getContext } from '../context';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const { stateXstateDerived, eventEmitter } = getContext();
	const sizes = { width: UI_BASE_SIZE * 1.5, height: UI_BASE_SIZE * 1.5 };
	const disabled = $derived(!stateXstateDerived.isIdle());
	const active = $derived(stateBetDerived.activeBetMode()?.type === 'activate');

	const openModal = () => (stateModal.modal = { name: 'buyBonus' });
	const disableActiveBetMode = () => (stateBet.activeBetModeKey = 'BASE');
	const onpress = () => {
		eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (active) {
			disableActiveBetMode();
		} else {
			openModal();
		}
	};

	const getState = (value: {
		active: boolean;
		disabled: boolean;
		hovered: boolean;
		pressed: boolean;
	}) => {
		if (value.disabled) return 'disabled' as const;
		if (value.pressed) return 'pressed' as const;
		if (value.hovered) return 'hovered' as const;
		if (value.active) return 'active' as const;
		return 'default' as const;
	};
</script>

<Button {...props} {sizes} {disabled} {onpress}>
	{#snippet children({ center, hovered, pressed })}
		{@const state = getState({
			active,
			disabled,
			hovered,
			pressed,
		})}
		<ButtonBuyBonusSpine {state} {...center} width={sizes.width * 3.5} />
	{/snippet}
</Button>
