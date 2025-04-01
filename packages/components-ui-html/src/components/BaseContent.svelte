<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		tiled?: boolean;
		maxWidth: '100%' | '500px';
		children: Snippet;
	};

	const props: Props = $props();
	const paddingSize = $derived(props.tiled ? '1.5rem' : '0');
</script>

<div
	class="ui-popup-standard-content-wrap"
	style="--maxWidth: {props.maxWidth}; --padding-size: {paddingSize}; --zIndex: {100}"
>
	<div class="wrap" class:tiled={props.tiled}>
		{@render props.children()}
	</div>
</div>

<style lang="scss">
	.ui-popup-standard-content-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: var(--zIndex);
		max-width: var(--maxWidth);
		max-height: calc(100% - 1.2rem);

		& :global(.button) {
			background-color: black;
			color: white;
		}

		& :global(.button:hover) {
			background-color: var(--game-theme-color);
		}

		& :global(.button.variant-primary) {
			background-color: var(--game-theme-color);
		}

		& :global(.button.variant-transparent) {
			background-color: transparent;
		}
	}

	@media (orientation: portrait) {
		.ui-popup-standard-content-wrap {
			max-height: calc(100% - 8rem);
		}
	}

	.wrap {
		display: flex;
		flex-direction: column;
		border-radius: 20px;
		align-items: center;
		max-height: 100%;
		gap: 1rem;

		&.tiled {
			background-image: var(--popup-base-url);
			padding-bottom: var(--padding-size);
		}
	}
</style>
