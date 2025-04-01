<script lang="ts">
	import { Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { getLayoutContext } from 'utils-layout';
	import { stateModal, stateMetaDerived } from 'state-shared';

	import BaseIcon from './BaseIcon.svelte';
	import BonusCards from './BonusCards.svelte';
	import BonusBetAmountToggle from './BonusBetAmountToggle.svelte';
	import BonusContentWrapLarge from './BonusContentWrapLarge.svelte';
	import BonusContentWrapPortrait from './BonusContentWrapPortrait.svelte';
	import BonusContentWrapLandscape from './BonusContentWrapLandscape.svelte';

	const { stateLayoutDerived } = getLayoutContext();

	const activateList = $derived(
		stateMetaDerived.betModeMetaList().filter((item) => item.type === 'activate'),
	);

	const buyList = $derived(
		stateMetaDerived.betModeMetaList().filter((item) => item.type === 'buy'),
	);

	const COMPONENT_MAP = {
		desktop: BonusContentWrapLarge,
		tablet: BonusContentWrapLarge,
		portrait: BonusContentWrapPortrait,
		landscape: BonusContentWrapLandscape,
	} as const;

	const BonusContentWrap = $derived(COMPONENT_MAP[stateLayoutDerived.layoutType()]);
</script>

{#if stateModal.modal?.name === 'buyBonus'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<BonusContentWrap maxListLength={Math.max(activateList.length, buyList.length)}>
			{#snippet rtpBadge({ size })}
				<div class="badge-icon">
					<BaseIcon icon="rtp_badge" {size} />
				</div>
			{/snippet}

			{#snippet betAmount()}
				<BonusBetAmountToggle />
			{/snippet}

			{#snippet bonusCardsActivate()}
				<BonusCards list={activateList} />
			{/snippet}

			{#snippet bonusCardsBuy()}
				<BonusCards list={buyList} />
			{/snippet}
		</BonusContentWrap>
	</Popup>
{/if}

<style lang="scss">
	.badge-icon {
		border: 2px solid var(--game-theme-color);
		border-radius: 8rem;
	}
</style>
