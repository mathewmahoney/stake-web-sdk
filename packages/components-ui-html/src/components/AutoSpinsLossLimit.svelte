<script lang="ts">
	import { stateUi, LOSS_LIMIT_TEXT_OPTIONS } from 'state-shared';
	import { OptionsGrid } from 'components-shared';

	import { i18nDerived } from '../i18n/i18nDerived';
</script>

<span class="title">{i18nDerived.lossLimit()}</span>

<OptionsGrid
	miniSize
	value={stateUi.autoSpinsLossLimitText}
	options={LOSS_LIMIT_TEXT_OPTIONS}
	onchange={(value) => (stateUi.autoSpinsLossLimitText = value)}
>
	{#snippet option({ option })}
		<span class:infinity={option === '∞'} class="option-wrap" data-test="loss-limit-{option}">
			{option}
		</span>
	{/snippet}
</OptionsGrid>

<style lang="scss">
	.title {
		line-height: 1.4rem;
	}

	.option-wrap {
		white-space: nowrap;
	}

	.infinity {
		font-size: 1.5rem;
		line-height: 1rem;
		margin-top: 0.3rem;
		vertical-align: middle;
	}
</style>
