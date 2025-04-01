<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();
</script>

<div class="volatility">
	{@render props.children()}
</div>

<style lang="scss">
	.volatility {
		position: absolute;
		top: 1rem;
		left: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.2rem;
		font-weight: bold;

		& > :global(img) {
			width: 120px;
		}

		@media (orientation: portrait) {
			@media (max-height: 620px) {
				top: 0rem;
				left: 1rem;
				font-size: 1rem;
				gap: 0rem;
				& > :global(img) {
					width: 90px;
				}
			}
		}

		@media (orientation: landscape) {
			@media (max-width: 700px) {
				top: 0rem;
				left: 1em;
				font-size: 1.2rem;
				gap: 0.1rem;
				& > :global(img) {
					width: 100px;
				}
			}
		}
	}
</style>
