<script lang="ts">
	import { stateBet, stateConfig } from 'state-shared';
	import { Button, OptionsToggle } from 'components-shared';
	import { sharedAssetsHtml } from 'constants-shared/assets';
	import { getEventEmitterContext } from 'utils-event-emitter';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import BaseIcon from './BaseIcon.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import type { EmitterEventModal } from '../types';

	const { eventEmitter } = getEventEmitterContext<EmitterEventModal>();

	const BUTTON_PROPS = {
		variant: 'transparent',
		spacing: 'none',
		shape: 'circle',
	} as const;

	const iconSize = '2.5rem';

	const DECREASE_ICON_MAP = {
		icon: 'button_decrease_default',
		pressed: 'button_decrease_disable',
		hovered: 'button_decrease_hover',
	} as const;

	const INCREASE_ICON_MAP = {
		icon: 'button_increase_default',
		pressed: 'button_increase_disable',
		hovered: 'button_increase_hover',
	} as const;
</script>

<div class="bet-amount-wrap">
	<div
		class="chocolate-wrap"
		style={`
			--popup-base-url: url("${sharedAssetsHtml.buy_base_1}");
		`}
	>
		<div class="amount-wrap">
			<span>{i18nDerived.bet()}</span>
			<span class="amount">{numberToCurrencyString(stateBet.betAmount)}</span>
		</div>
		<OptionsToggle
			value={stateBet.betAmount}
			options={stateConfig.betAmountOptions}
			onchange={(value) => {
				stateBet.betAmount = value;
				eventEmitter.broadcast({ type: 'soundPressGeneral' });
			}}
		>
			{#snippet children({ disabledDown, disabledUp, toggleDown, toggleUp })}
				<div class="toggle-wrap">
					<Button
						data-test="down-button"
						{...BUTTON_PROPS}
						disabled={disabledDown}
						onclick={toggleDown}
					>
						<BaseIcon {...DECREASE_ICON_MAP} disabled={disabledDown} size={iconSize} />
					</Button>
					<Button data-test="up-button" {...BUTTON_PROPS} disabled={disabledUp} onclick={toggleUp}>
						<BaseIcon {...INCREASE_ICON_MAP} disabled={disabledUp} size={iconSize} />
					</Button>
				</div>
			{/snippet}
		</OptionsToggle>
	</div>
	<!-- <div class="amount-progress-wrap">
		<div class="amount-progress amount-progress-bg" />
		<div class="amount-progress amount-progress-bar" style="width: {100 * progress}%" />
	</div> -->
</div>

<style lang="scss">
	.bet-amount-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.45rem;
	}

	.chocolate-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: var(--popup-base-url);
		padding: 0.75rem 3.5rem;
		border-radius: 12px;
		gap: 0.8rem;
	}

	.amount-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.amount {
		font-size: 1.6rem;
		line-height: 1.6rem;
		white-space: nowrap;
		font-weight: bold;
	}

	.toggle-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	}

	// .amount-progress-wrap {
	// 	position: relative;
	// 	width: 70%;
	// }

	// .amount-progress {
	// 	position: absolute;
	// 	height: 4px;
	// 	border-radius: 1px;
	// }

	// .amount-progress-bg {
	// 	width: 100%;
	// 	opacity: 0.6;
	// 	background-color: black;
	// }

	// .amount-progress-bar {
	// 	background-color: white;
	// }
</style>
