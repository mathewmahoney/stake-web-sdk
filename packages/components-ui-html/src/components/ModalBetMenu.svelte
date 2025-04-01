<script lang="ts">
	import { Button, Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateModal } from 'state-shared';

	import BaseTitle from './BaseTitle.svelte';
	import BaseContent from './BaseContent.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import BaseButtonWrap from './BaseButtonWrap.svelte';
	import BetMenuAmountToggle from './BetMenuAmountToggle.svelte';
	import BetMenuAmountGrid from './BetMenuAmountGrid.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	const confirm = () => {
		stateModal.modal = null;
	};
</script>

{#if stateModal.modal?.name === 'betAmountMenu'}
	<Popup zIndex={zIndex.modal} onclose={() => (stateModal.modal = null)}>
		<BaseContent maxWidth="100%" tiled>
			<BaseTitle>
				{i18nDerived.betMenu()}
			</BaseTitle>
			<BaseScrollable type="column">
				<div class="subtitle" data-test="select-your-bet">{i18nDerived.selectYourBet()}</div>
				<div class="flex-item">
					<div class="item1"><BetMenuAmountToggle /></div>
					<div class="item2"><BetMenuAmountGrid /></div>
				</div>
			</BaseScrollable>
			<BaseButtonWrap type="full-width">
				<Button spacing="primary" data-test="confirm-button" onclick={confirm}>
					{i18nDerived.confirm()}
				</Button>
			</BaseButtonWrap>
		</BaseContent>
	</Popup>
{/if}

<style lang="scss">
	.subtitle {
		line-height: 1rem;
		font-size: 1rem;
	}
	.flex-item {
		text-align: center;
		display: flex;
		gap: 15px;
		flex-direction: column;
		justify-content: center;
	}

	.item1 {
		order: 1;
	}

	.item2 {
		order: 2;
	}

	// portrait width range: (320px - screen height)
	@media (orientation: portrait) {
		@media (max-width: 600px) {
			.subtitle {
				font-size: 1rem;
			}
		}
	}

	@media (orientation: landscape) {
		@media (max-height: 480px) {
			.subtitle {
				font-size: 1rem;
			}
			.item1 {
				order: 2;
			}
			.flex-item {
				gap: 0.2rem;
			}
			.item2 {
				order: 1;
			}
		}
	}
</style>
