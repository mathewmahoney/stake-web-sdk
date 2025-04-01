<script lang="ts">
	import type { ButtonProps } from 'components-pixi';
	import { stateSound } from 'state-shared';

	import UiButton from './UiButton.svelte';
	import UiMenuLabel from './UiMenuLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import { UI_BASE_SIZE } from '../constants';
	import { getContext } from '../context';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const context = getContext();
	const sizes = { width: UI_BASE_SIZE, height: UI_BASE_SIZE };

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (stateSound.volumeValueMaster === 0) {
			stateSound.volumeValueMaster = 50;
		} else {
			stateSound.volumeValueMaster = 0;
		}
	};

	const icon = $derived(
		stateSound.volumeValueMaster === 0 ? ('soundOff' as const) : ('soundOn' as const),
	);
</script>

<UiButton {...props} {sizes} {onpress} {icon}>
	<UiMenuLabel x={sizes.width} y={sizes.height * 0.5} text={i18nDerived.audio()} />
</UiButton>
