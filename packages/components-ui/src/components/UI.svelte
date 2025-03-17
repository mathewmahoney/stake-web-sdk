<script lang="ts">
	import { EnableSpaceHold } from 'components-shared';

	import UiFadeContainer from './UiFadeContainer.svelte';
	import AdvancedButton from './AdvancedButton.svelte';
	import BalanceAmount from './BalanceAmount.svelte';
	import WinAmount from './WinAmount.svelte';
	import BuyBonusButton from './BuyBonusButton.svelte';
	import BetAmount from './BetAmount.svelte';
	import BetButton from './BetButton.svelte';
	import StopButton from './StopButton.svelte';
	import TurboButton from './TurboButton.svelte';
	import AutoBetButton from './AutoBetButton.svelte';
</script>

<UiFadeContainer>
	<EnableSpaceHold />
	<AdvancedButton />
	<BalanceAmount />
	<WinAmount />
	<BetAmount />
	<BuyBonusButton />
	<BetButton />
	<StopButton />
	<TurboButton />
	<AutoBetButton />
</UiFadeContainer>
