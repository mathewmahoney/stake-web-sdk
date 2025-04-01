<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { Button, type ButtonProps } from 'components-pixi';
	import { OnHotkey } from 'components-shared';
	import { stateBetDerived } from 'state-shared';

	import ButtonBetSpine from './ButtonBetSpine.svelte';
	import ButtonBetSprite from './ButtonBetSprite.svelte';
	import ButtonBetProvider from './ButtonBetProvider.svelte';
	import ButtonBetAutoSpinsCounter from './ButtonBetAutoSpinsCounter.svelte';
	import { UI_BASE_SIZE } from '../constants';

	const props: Partial<Omit<ButtonProps, 'children'>> = $props();
	const disabled = $derived(!stateBetDerived.isBetCostAvailable());
	const sizes = { width: UI_BASE_SIZE * 1.5, height: UI_BASE_SIZE * 1.5 };
</script>

<ButtonBetProvider>
	{#snippet children({ key, onpress })}
		<OnHotkey hotkey="Space" {disabled} {onpress} />
		<Button {...props} {sizes} {onpress} {disabled}>
			{#snippet children({ center, hovered })}
				<Container {...center}>
					<ButtonBetSprite {key} {hovered} width={sizes.width} height={sizes.height} />
					<ButtonBetSpine {key} width={sizes.width * 0.5} height={sizes.height * 0.5} />
					<ButtonBetAutoSpinsCounter baseSize={sizes.width * 0.1} />
				</Container>
			{/snippet}
		</Button>
	{/snippet}
</ButtonBetProvider>
