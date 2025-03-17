<script lang="ts">
	import { fade } from 'svelte/transition';

	import { waitForTimeout } from 'utils-shared/wait';

	import Loader from './Loader.svelte';

	const CARROT_LOADER_BACKGROUND_COLOR = '#0C4144';
	const CARROT_LOADER_FINISH_ONCE_TIMEOUT = 2500;
	const CARROT_LOADER_SRC =
		'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/loaders/carrot-v2.gif';

	let carrotLoading = $state(true);
</script>

{#if carrotLoading}
	<div class="wrap" out:fade style="--wrap-background: {CARROT_LOADER_BACKGROUND_COLOR};">
		<div
			transition:fade
			class="gif-loader-wrap"
			style="--loader-wrap-background: {CARROT_LOADER_BACKGROUND_COLOR};"
		>
			<Loader
				maxWidth={400}
				src={CARROT_LOADER_SRC}
				onload={async () => {
					await waitForTimeout(CARROT_LOADER_FINISH_ONCE_TIMEOUT);
					carrotLoading = false;
				}}
			/>
		</div>
	</div>
{/if}

<style lang="scss">
	.wrap {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 999;
		background-color: black;
		overflow: hidden;
		background-color: var(--wrap-background);
	}

	.gif-loader-wrap {
		background-color: var(--loader-wrap-background);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
