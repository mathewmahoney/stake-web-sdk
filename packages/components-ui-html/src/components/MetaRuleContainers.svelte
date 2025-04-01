<script lang="ts">
	import type { Snippet } from 'svelte';

	import type { GameRuleContainer } from 'state-shared';

	type Props = {
		rows: number;
		containers: GameRuleContainer[];
		children: Snippet<[{ container: GameRuleContainer }]>;
	};

	const props: Props = $props();
</script>

<div class="containers">
	{#each props.containers as container, index}
		<div
			class="container"
			style="--column: {container.column + 1}; --row: {container.row + 1}; --index: {index + 1}"
		>
			{@render props.children({ container })}
		</div>
	{/each}
</div>

<style lang="scss">
	.containers {
		display: grid;
		align-items: center;
		grid-template-rows: auto 1fr;
		padding: 0 2rem;
	}

	.container {
		grid-column-start: var(--column);
		grid-row-start: var(--row);

		@media (max-width: 374px) {
			// for Galaxy fold
			grid-column-start: 1;
			grid-row-start: var(--index);
		}
	}
</style>
