<script lang="ts">
	import type { BetModeData } from 'state-shared';
	import type { Snippet } from 'svelte';

	type Props = {
		type: BetModeData['type'];
		children: Snippet;
	};

	const props: Props = $props();
</script>

<div class="title" class:activate-title={props.type === 'activate'}>
	{@render props.children()}
</div>

<style lang="scss">
	.title {
		font-size: 1rem;
		line-height: 1rem;
		color: var(--game-theme-color);
		font-weight: bold;
		text-align: center;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.activate-title {
		color: var(--bonus-activate-color, var(--game-theme-color));
	}
</style>
