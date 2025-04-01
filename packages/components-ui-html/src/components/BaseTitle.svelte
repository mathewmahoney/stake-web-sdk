<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();
</script>

<div class="ui-modal-title-wrap">
	{@render props.children()}
</div>

<style lang="scss">
	.ui-modal-title-wrap {
		font-size: 3rem;
		line-height: 3rem;
		font-weight: bold;
		text-align: center;
		overflow-wrap: anywhere;
		padding: 0 var(--padding-size);
		padding-top: var(--padding-size);
		white-space: nowrap;
	}

	@media (orientation: portrait) {
		@media (max-width: 480px) {
			.ui-modal-title-wrap {
				font-size: 2rem;
				line-height: 2rem;
			}
		}
	}

	@media (orientation: landscape) {
		@media (min-height: 240px) and (max-height: 385px) {
			.ui-modal-title-wrap {
				font-size: 2.4rem;
				line-height: 1.4rem;
			}
		}
	}
</style>
