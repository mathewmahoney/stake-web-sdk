<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Z_INDEX } from '../constants';

	type Props = {
		background?: boolean;
		maxWidth: string;
		children: Snippet;
	};

	const props: Props = $props();
	const paddingSize = $derived(props.background ? '1.5rem' : '0');
</script>

<div
	class="ui-popup-standard-content-wrap"
	style="--maxWidth: {props.maxWidth}; --padding-size: {paddingSize}; --zIndex: {Z_INDEX.contentLayer}"
>
	<div class="wrap" class:background={props.background}>
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

		&.background {
			background-image: var(--popup-base-url);
			padding-bottom: var(--padding-size);
		}
	}
</style>
