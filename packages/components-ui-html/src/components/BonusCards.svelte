<script lang="ts">
	import { stateBet, stateModal, type BetModeData } from 'state-shared';
	import { Button } from 'components-shared';
	import { getEventEmitterContext } from 'utils-event-emitter';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import { stateBonus } from '../stateBonus.svelte';
	import BonusCard from './BonusCard.svelte';
	import BonusTitle from './BonusTitle.svelte';
	import BonusDescription from './BonusDescription.svelte';
	import type { EmitterEventModal } from '../types';

	type Props = {
		list: BetModeData[];
	};

	const props: Props = $props();
	const { eventEmitter } = getEventEmitterContext<EmitterEventModal>();
</script>

{#each props.list as betModeData}
	{#if betModeData.type !== 'default'}
		<BonusCard>
			{#snippet icon()}
				<img src={betModeData.assets.icon} alt="bet mode icon" draggable="false" />
			{/snippet}

			{#snippet title()}
				<BonusTitle type={betModeData.type}>
					{betModeData.text.title}
				</BonusTitle>
			{/snippet}

			{#snippet description()}
				{#if betModeData?.text?.description}
					<BonusDescription>
						{betModeData.text.description}
					</BonusDescription>
				{/if}
			{/snippet}

			{#snippet volatility()}
				<img src={betModeData.assets.volatility} alt="bet mode volatility" draggable="false" />
			{/snippet}

			{#snippet price()}
				{`${numberToCurrencyString(stateBet.betAmount * betModeData.costMultiplier)}`}
			{/snippet}

			{#snippet button()}
				<div
					class="bet-mode-button"
					style={`
          --bet-mode-button-bg-url: url("${betModeData.assets.button}");
        `}
				>
					<Button
						onclick={() => {
							stateBonus.selectedBetModeKey = betModeData.mode;
							eventEmitter.broadcast({ type: 'buyBonusConfirm' });
							eventEmitter.broadcast({ type: 'soundPressGeneral' });
						}}
						disabled={stateBet.betAmount <= 0 ||
							stateBet.balanceAmount < stateBet.betAmount * betModeData.costMultiplier}
					>
						{betModeData.text.button}
					</Button>
				</div>
			{/snippet}
		</BonusCard>
	{/if}
{/each}

<style lang="scss">
	.bet-mode-button {
		display: flex;
		flex-direction: row;
		justify-content: center;

		& :global(button) {
			background-image: var(--bet-mode-button-bg-url);
		}
	}
</style>
