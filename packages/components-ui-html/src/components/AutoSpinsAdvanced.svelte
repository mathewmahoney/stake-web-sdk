<script lang="ts">
	import { slide } from 'svelte/transition';
	import { stateBetDerived } from 'state-shared';
	import { OptionsDropdown } from 'components-shared';
	import { getEventEmitterContext } from 'utils-event-emitter';

	import AutoSpinsLossLimit from './AutoSpinsLossLimit.svelte';
	import AutoSpinsSingleWinLimit from './AutoSpinsSingleWinLimit.svelte';
	import type { EmitterEventModal } from '../types';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		ontoggle: (duration: number) => void;
	};

	const props: Props = $props();
	const { eventEmitter } = getEventEmitterContext<EmitterEventModal>();
	const SLIDE_DURATION = 100;

	let open = $state(false);

	$effect(() => {
		if (open) props.ontoggle(SLIDE_DURATION);
	});
</script>

<OptionsDropdown
	{open}
	disabled={stateBetDerived.activeBetMode().type === 'activate'}
	onchange={(value) => {
		open = value;
		eventEmitter.broadcast({ type: 'soundPressGeneral' });
	}}
>
	<span>{i18nDerived.advanced()}</span>
</OptionsDropdown>

{#if open}
	<div class="panel-wrap" transition:slide={{ duration: SLIDE_DURATION }}>
		<AutoSpinsLossLimit />
		<AutoSpinsSingleWinLimit />
	</div>
{/if}

<style lang="scss">
	.panel-wrap {
		background-color: black;
		padding: 0.8rem 0.8rem 1.2rem 0.8rem;
		border-radius: 1rem;
		border: 2px solid white;
	}
</style>
