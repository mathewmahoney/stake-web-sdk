<script lang="ts">
	import { Button, Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateBet, stateModal, stateUi, INFINITY_MARK } from 'state-shared';
	import { getEventEmitterContext } from 'utils-event-emitter';

	import BaseTitle from './BaseTitle.svelte';
	import BaseContent from './BaseContent.svelte';
	import BaseScrollable from './BaseScrollable.svelte';
	import BaseButtonWrap from './BaseButtonWrap.svelte';
	import BaseVolatilityWrap from './BaseVolatilityWrap.svelte';
	import { stateBonus, stateBonusDerived } from '../stateBonus.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';
	import type { EmitterEventModal } from '../types';

	const { eventEmitter } = getEventEmitterContext<EmitterEventModal>();

	const confirm = () => {
		stateBet.activeBetModeKey = stateBonus.selectedBetModeKey;

		if (stateBonusDerived.selectedBetModeData().type === 'buy') {
			eventEmitter.broadcast({ type: 'bet' });
		}

		if (stateBonusDerived.selectedBetModeData().type === 'activate') {
			stateUi.autoSpinsLossLimitText = INFINITY_MARK;
			stateUi.autoSpinsSingleWinLimitText = INFINITY_MARK;
		}
	};
</script>

{#if stateModal.modal?.name === 'buyBonusConfirm'}
	<Popup zIndex={zIndex.dialog} onclose={() => (stateModal.modal = { name: 'buyBonus' })}>
		<BaseContent maxWidth="500px">
			<BaseTitle>
				{stateBonusDerived.selectedBetModeData().text.title}
			</BaseTitle>
			<BaseScrollable type="column">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					style="width: 100%;"
					src={stateBonusDerived.selectedBetModeData().assets.dialogImage}
					alt="dialog image"
					draggable="false"
				/>
				{stateBonusDerived.selectedBetModeData().text.dialog}
			</BaseScrollable>
			<BaseButtonWrap type="max-width">
				<Button
					spacing="primary"
					data-test="confirm-button"
					onclick={() => {
						confirm();
						eventEmitter.broadcast({ type: 'soundPressGeneral' });
						stateModal.modal = null;
					}}
				>
					{i18nDerived.confirm()}
				</Button>
			</BaseButtonWrap>
		</BaseContent>

		<BaseVolatilityWrap>
			<span>{i18nDerived.volatility()}</span>
			<img
				src={stateBonusDerived.selectedBetModeData().assets.dialogVolatility}
				alt="dialog volatility"
			/>
		</BaseVolatilityWrap>
	</Popup>
{/if}
