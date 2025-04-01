<script lang="ts">
	import type { Snippet } from 'svelte';

	import { zIndex } from 'constants-shared/zIndex';

	import Popup from './Popup.svelte';
	import Button from './Button.svelte';
	import { getDialog } from '../utils';

	type Props = {
		onconfirm: () => void;
		onclick: () => void;
		title: Snippet;
		content: Snippet;
		confirmText: Snippet;
	};

	const props: Props = $props();

	const { stateDialog } = getDialog();

	const close = () => {
		props.onclick();
		stateDialog.open = false;
	};

	const PADDING_SIZE = '1.5rem';
</script>

{#if stateDialog.open}
	<Popup zIndex={zIndex.dialog} onclose={close}>
		<div class="header" style="--padding-size: {PADDING_SIZE};">
			<div class="title" style="--padding-size: {PADDING_SIZE};" data-test="popup-title">
				{@render props.title()}
			</div>
		</div>
		<div class="content scrollY" style="--padding-size: {PADDING_SIZE};">
			<div class="dialog-content-wrap">
				<div class="dialog-content">
					{@render props.content()}
				</div>
			</div>
			<div class="submit-wrap">
				<Button
					spacing="primary"
					data-test="confirm-button"
					onclick={() => {
						props.onconfirm();
						props.onclick();
						stateDialog.open = false;
					}}
				>
					{@render props.confirmText()}
				</Button>
			</div>
		</div>
	</Popup>
{/if}

<style lang="scss">
	.submit-wrap {
		width: 100%;
		display: flex;
		justify-content: center;

		& :global(button) {
			max-width: 250px;
		}
	}

	.dialog-content-wrap {
		display: flex;
		justify-content: center;
	}

	.dialog-content {
		font-size: 1rem;
		text-align: center;
		max-width: 500px;

		@media (min-width: 800px) {
			font-size: 1.25rem;
		}

		@media (orientation: landscape) {
			@media (min-width: 1080px) {
				font-size: 1.5rem;
			}
		}
	}

	.header {
		justify-content: center;
		padding-top: var(--padding-size);
		position: relative;
	}

	.title {
		color: white;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		padding: 0 var(--padding-size) 0 var(--padding-size);
		overflow-wrap: anywhere;

		@media (min-width: 800px) {
			font-size: 2.4rem;
		}

		@media (orientation: landscape) {
			@media (min-width: 1080px) {
				font-size: 3rem;
			}
		}
	}

	.content {
		min-width: 250px;
		padding: 0 var(--padding-size) var(--padding-size) var(--padding-size);

		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
	}
</style>
