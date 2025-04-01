<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();
</script>

<div class="description">
	{@render props.children()}
</div>

<style lang="scss">
	.description {
		text-align: center;
		min-height: 4rem;
		white-space: pre-line;
		font-size: 0.75rem;
		display: inline-flex;
		align-items: center;
	}

	.description:empty {
		display: none;
	}
</style>
