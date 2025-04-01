<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		label: Snippet;
		value: Snippet;
	};

	const props: Props = $props();
</script>

<div class="label-wrap">
	{#if 'label' in props}
		<span class="label">
			{@render props.label()}
		</span>
	{/if}

	{#if 'value' in props}
		<span class="value">
			{@render props.value()}
		</span>
	{/if}
</div>

<style lang="scss">
	.label-wrap {
		display: flex;
		gap: 0.5rem;

		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 300px) {
			flex-direction: column;
		}
	}

	.label {
		white-space: nowrap;
		font-weight: bold;
	}

	.value {
		font-weight: bold;
		color: var(--primary);
	}
</style>
