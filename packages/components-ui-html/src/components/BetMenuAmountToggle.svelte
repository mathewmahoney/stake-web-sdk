<script lang="ts">
	import { stateBet, stateConfig } from 'state-shared';
	import { Button, OptionsToggle } from 'components-shared';
	import { sharedAssetsHtml } from 'constants-shared/assets';
	import { getEventEmitterContext } from 'utils-event-emitter';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import BaseIcon from './BaseIcon.svelte';
	import type { EmitterEventModal } from '../types';

	const { eventEmitter } = getEventEmitterContext<EmitterEventModal>();

	const BUTTON_PROPS = {
		variant: 'transparent',
		spacing: 'none',
		shape: 'circle',
	} as const;

	const iconSize = '2.5rem';

	const DECREASE_ICON_MAP = {
		icon: 'circle_decrease_default',
		pressed: 'circle_decrease_click',
		hovered: 'circle_decrease_hover',
	} as const;

	const INCREASE_ICON_MAP = {
		icon: 'circle_increase_default',
		pressed: 'circle_increase_click',
		hovered: 'circle_increase_hover',
	} as const;
</script>

<div class="section-wrap">
	<div
		class="bet-amount-wrap"
		style={`
			--popup-base-url: url("${sharedAssetsHtml.buy_base_1}");
		`}
	>
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

					<div class="amount-wrap">
						<span class="amount">{numberToCurrencyString(stateBet.betAmount)}</span>
					</div>

					<Button data-test="up-button" {...BUTTON_PROPS} disabled={disabledUp} onclick={toggleUp}>
						<BaseIcon {...INCREASE_ICON_MAP} disabled={disabledUp} size={iconSize} />
					</Button>
				</div>
			{/snippet}
		</OptionsToggle>
	</div>
</div>

<style lang="scss">
	.section-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5px;
	}
	.bet-amount-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.6rem;
	}

	.amount-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.7rem;
		padding: 7px 10px 7px 10px;
		border: 2px solid #ffffff; /* Border color */
		border-radius: 10px; /* Make it round */
	}

	.label {
		color: var(--game-theme-color);
		font-size: 1.4rem;
		line-height: 1.6rem;
		white-space: nowrap;
		font-weight: bold;
	}

	.amount {
		font-size: 1.4rem;
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

	// portrait width range: (320px - screen height)
	@media (orientation: portrait) {
		@media (max-width: 600px) {
			.section-wrap {
				padding: 3px;
			}
			.amount {
				font-size: 1.4rem;
			}
			.label {
				font-size: 1rem;
			}
		}
	}

	// landscape height range: (320px - 610px)
	@media (orientation: landscape) {
		@media (max-height: 600px) {
			.amount {
				font-size: 1rem;
			}
			.label {
				font-size: 1rem;
			}
			.section-wrap {
				padding: 5px;
			}
		}
	}
</style>
