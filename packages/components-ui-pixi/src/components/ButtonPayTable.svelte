<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateModal } from 'state-shared';

	import UiButton from './UiButton.svelte';
	import UiMenuLabel from './UiMenuLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import { getContext } from '../context';
	import { UI_BASE_SIZE } from '../constants';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'payTable' };
	};
</script>

<UiButton {...props} {sizes} {onpress} icon="payTable">
	<UiMenuLabel x={sizes.width} y={sizes.height * 0.5} text={i18nDerived.payTable()} />
</UiButton>
