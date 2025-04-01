<script lang="ts">
	import { Button, type ButtonProps } from 'components-pixi';

	import UiButtonKeys from './UiButtonKeys.svelte';
	import UiSprite from './UiSprite.svelte';
	import type { ButtonIcon, ButtonKeys } from '../types';
	import type { Snippet } from 'svelte';

	type Props = Omit<ButtonProps, 'children'> & {
		icon: ButtonIcon;
		active?: boolean;
		sizes: { width: number; height: number };
		children?: Snippet;
	};

	const { icon, active, children: childrenFromParent, ...buttonProps }: Props = $props();

	const getKey = ({
		keys,
		states,
	}: {
		keys: ButtonKeys;
		states: {
			disabled?: boolean;
			hovered?: boolean;
			pressed?: boolean;
			active?: boolean;
		};
	}) => {
		if (states.active && states.hovered && keys.activeHoverKey) return keys.activeHoverKey;
		if (states.active && keys.activeKey) return keys.activeKey;
		if (states.disabled && keys.disabledKey) return keys.disabledKey;
		if (states.pressed && keys.pressKey) return keys.pressKey;
		if (states.hovered && keys.hoverKey) return keys.hoverKey;
		return keys.defaultKey;
	};
</script>

<UiButtonKeys {icon}>
	{#snippet children(keys)}
		<Button {...buttonProps}>
			{#snippet children({ center, hovered, pressed })}
				{@const key = getKey({
					keys,
					states: {
						disabled: buttonProps.disabled,
						hovered,
						pressed,
						active,
					},
				})}

				{#if key}
					<UiSprite
						{key}
						{...center}
						anchor={0.5}
						width={buttonProps.sizes.width}
						height={buttonProps.sizes.height}
					/>
				{/if}

				{@render childrenFromParent?.()}
			{/snippet}
		</Button>
	{/snippet}
</UiButtonKeys>
