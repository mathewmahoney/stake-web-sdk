<script lang="ts">
	import type { ButtonBetKey } from './ButtonBetProvider.svelte';
	import UiSprite, { type Props as UiSpriteProps } from './UiSprite.svelte';

	type Props = Omit<UiSpriteProps, 'anchor'> & {
		key: ButtonBetKey;
		hovered: boolean;
	};

	const { key, hovered, ...uiSpriteProps }: Props = $props();

	const spriteKey = $derived.by(() => {
		if (hovered && key === 'spin_default') return 'spin_default' as const;
		if (hovered && key === 'stop_default') return 'stop_default' as const;
		return key;
	});
</script>

<UiSprite {...uiSpriteProps} anchor={0.5} key={spriteKey} />
