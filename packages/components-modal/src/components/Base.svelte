<script lang="ts">
	import { blur } from 'svelte/transition';
	import { onMount, type Snippet } from 'svelte';

	import { OnHotkey } from 'components-shared';
	import { waitForTimeout } from 'utils-shared/wait';

	import { Z_INDEX } from '../constants';

	type Props = { children: Snippet; persistent?: boolean; onclose: () => void };

	const props: Props = $props();
	const BASE_URL =
		'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/shared-asset-package/ui-slots/2.0';
	const ASSETS = {
		buy_base_1: `${BASE_URL}/buy_base_1.webp` as const,
		icon_exit: `${BASE_URL}/icon_exit.webp` as const,
	};
	const closeModal = () => (props.persistent ? undefined : props.onclose());

	let disabled = $state(true);

	onMount(async () => {
		await waitForTimeout(300);

		disabled = false;
	});
</script>

<div>
	{@render props.children()}
</div>

<OnHotkey hotkey="Escape" onpress={closeModal} />

<div
	class="pop-up-wrap"
	class:disabled
	style={`
		z-index: 999;
		--popup-base-url: url("${ASSETS.buy_base_1}");
	`}
>
	<div class="blur-layer"></div>
	<div
		class="top-layer"
		style="--zIndex: {Z_INDEX.topLayer}"
		in:blur={{ duration: 300, opacity: 0, y: 30 }}
	>
		<div
			tabindex={0}
			class="click-to-close-layer"
			onclick={closeModal}
			onkeypress={closeModal}
			role="button"
			style="--zIndex: {Z_INDEX.clickToCloseLayer}"
		></div>

		{#if !props.persistent}
			<div class="close-button-wrap" style="--zIndex: {Z_INDEX.closeButton}">
				<button class="close-button" data-test="close-button" onclick={closeModal}>
					<div style="width: 1.5rem; height: 1.5rem;">
						<img src={ASSETS.icon_exit} style="width: 100%; object-fit: cover;" alt="icon_exit" />
					</div>
				</button>
			</div>
		{/if}
		{@render props.children()}
	</div>
</div>

<style lang="scss">
	.pop-up-wrap {
		font-family: 'proxima-nova', sans-serif;
		touch-action: manipulation;
		color: white;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;

		display: flex !important;
		justify-content: center;
		align-items: center;

		&.disabled {
			pointer-events: none;
		}

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

	.blur-layer {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(30px);
	}

	.top-layer {
		width: 100%;
		height: 100%;
		z-index: var(--zIndex);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.click-to-close-layer {
		z-index: var(--zIndex);

		position: absolute;
		width: 100%;
		height: 100%;
	}

	.close-button-wrap {
		position: absolute;
		top: 0;
		right: 0;
		z-index: var(--zIndex);
		background-image: var(--popup-base-url);
		border-radius: 0 0 0 10px;
	}

	.close-button {
		cursor: pointer;
		color: white;
		font-weight: 900;
		background-color: transparent;
		border-color: transparent;
		line-height: 1.1rem; /* to remove the button style influence */
		padding: 0.7rem 1rem 0.7rem 1.2rem;
	}
</style>
