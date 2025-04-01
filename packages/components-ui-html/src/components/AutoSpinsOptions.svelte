<script lang="ts">
	import { getLayoutContext } from 'utils-layout';
	import { stateUi, AUTO_SPINS_TEXT_OPTIONS } from 'state-shared';
	import { OptionsGrid } from 'components-shared';

	const { stateLayoutDerived } = getLayoutContext();
	const AUTO_SPINS_TEXT_OPTIONS_PORTRAIT = AUTO_SPINS_TEXT_OPTIONS.filter(
		(value) => value !== '1000',
	);

	const options = $derived(
		stateLayoutDerived.layoutType() === 'landscape'
			? AUTO_SPINS_TEXT_OPTIONS_PORTRAIT
			: AUTO_SPINS_TEXT_OPTIONS,
	);
</script>

<div class="panel-wrap">
	<OptionsGrid
		value={stateUi.autoSpinsText}
		{options}
		onchange={(value) => (stateUi.autoSpinsText = value)}
	>
		{#snippet option({ option })}
			<span class:infinity={option === '∞'} data-test="round-options">
				{option}
			</span>
		{/snippet}
	</OptionsGrid>
</div>

<style lang="scss">
	.panel-wrap {
		padding: 0.8rem 0.925rem 1.2rem 0.925rem;
	}

	.infinity {
		font-size: 1.5rem;
		line-height: 1rem;
		margin-top: 0.3rem;
	}
</style>
