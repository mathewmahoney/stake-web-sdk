<script lang="ts">
	import { SpineProvider, SpineTrack, type SpineProviderProps } from 'pixi-svelte';
	import { OnMount } from 'components-shared';

	import type { ButtonBetKey } from './ButtonBetProvider.svelte';

	type Props = Omit<SpineProviderProps, 'children'> & {
		key: ButtonBetKey;
	};

	const { key, ...spineProviderProps }: Props = $props();

	type AnimationName = 'spin_stop' | 'stop_spin' | 'disabled_spin';

	const ANIMATION_NAME_TRANSITION_MAP: Partial<
		Record<ButtonBetKey, Partial<Record<ButtonBetKey, AnimationName>>>
	> = {
		spin_default: { stop_default: 'spin_stop' },
		stop_default: { spin_default: 'stop_spin' },
		stop_disabled: { spin_default: 'disabled_spin' },
	};

	let previousKey = $state(key);
	const animationName = $derived(ANIMATION_NAME_TRANSITION_MAP?.[previousKey]?.[key]);
</script>

{#if animationName}
	<SpineProvider key="betButton" {...spineProviderProps}>
		<SpineTrack
			trackIndex={0}
			{animationName}
			listener={{
				complete: () => {
					previousKey = key;
				},
			}}
		/>
	</SpineProvider>
{:else}
	<OnMount
		onmount={() => {
			previousKey = key;
		}}
	/>
{/if}
