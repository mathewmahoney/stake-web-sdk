<script lang="ts">
	import type { Snippet } from 'svelte';

	import { getLayoutContext } from 'utils-layout';
	import { sharedAssetsHtml } from 'constants-shared/assets';

	type Props = {
		icon: Snippet;
		title: Snippet;
		description: Snippet;
		volatility: Snippet;
		price: Snippet;
		button: Snippet;
	};

	const props: Props = $props();

	const { stateLayoutDerived } = getLayoutContext();

	const isMobile = $derived(
		stateLayoutDerived.layoutType() === 'portrait' ||
			stateLayoutDerived.layoutType() === 'landscape',
	);
</script>

<div
	class="bonus-card-wrap"
	style={`
		--popup-base-url: url("${sharedAssetsHtml.buy_base_1}");
	`}
>
	<div class="info">
		<div class="icon">
			{@render props.icon()}
		</div>
		{@render props.title()}
		{#if !isMobile}
			{@render props.description()}
		{/if}
		<div class="price" data-test="double-chance-price">
			<div class="volatility">
				{@render props.volatility()}
			</div>
			{@render props.price()}
		</div>
	</div>
	<div class="action-wrap" data-test="activate-button">
		{@render props.button()}
	</div>
</div>

<style lang="scss">
	.bonus-card-wrap {
		flex-direction: column;
		display: flex;
		justify-content: space-between;

		padding: 0 2rem;
		border-radius: 0.5rem;
		background-image: var(--popup-base-url);
		text-align: left;
		min-width: 155px;
		max-width: 180px;
		gap: 0.5rem;
	}

	.info {
		padding-top: 1rem;
		padding-bottom: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;

		& > :global(img) {
			width: 4.5rem;
			height: 4.5rem;
		}
	}

	.volatility {
		padding: 0.1em 0 1em 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		line-height: 1rem;
		align-items: center;
		& > :global(img) {
			width: 50px;
		}
	}

	.price {
		font-size: 1rem;
		line-height: 1rem;
		font-weight: bold;
		text-align: center;
		white-space: nowrap;
	}

	.action-wrap {
		padding-bottom: 1.4rem;
	}
</style>
