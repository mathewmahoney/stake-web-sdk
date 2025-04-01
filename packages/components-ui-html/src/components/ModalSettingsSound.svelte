<script lang="ts">
	import type { Snippet } from 'svelte';

	import { getEventEmitterContext } from 'utils-event-emitter';
	import { Button } from 'components-shared';

	import BaseIcon from './BaseIcon.svelte';
	import type { EmitterEventModal } from '../types';

	type Props = {
		value: number;
		children: Snippet;
	};

	let { value = $bindable(), children }: Props = $props();
	const { eventEmitter } = getEventEmitterContext<EmitterEventModal>();
	const ICONS = { on: 'volumeOn', off: 'volumeOff' } as const;
</script>

<div class="col">
	<span class="title">{@render children()}</span>
	<div class="row">
		<!-- button -->
		<div class="button-wrap">
			<Button
				shape="circle"
				spacing="none"
				variant="transparent"
				onclick={() => {
					eventEmitter.broadcast({ type: 'soundPressGeneral' });
					if (value === 0) {
						value = 50;
					} else {
						value = 0;
					}
				}}
			>
				<BaseIcon icon={value > 0 ? ICONS.on : ICONS.off} size="1.5rem" />
			</Button>
		</div>

		<!-- range -->
		<input bind:value type="range" min="0" max="100" class="range" />

		<!-- value -->
		<span class="value">{value}</span>
	</div>
</div>

<style lang="scss">
	.col {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-weight: 600;
	}

	.row {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}

	.button-wrap {
		width: 15%;
		display: flex;
		align-items: center;
	}

	.range {
		width: 70%;
		display: flex;
		align-items: center;
	}

	.value {
		width: 15%;
		text-align: center;
		font-weight: 700;
		font-size: 1.5rem;
	}
</style>
