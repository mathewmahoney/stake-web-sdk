<script lang="ts">
	import { stateUi } from 'state-shared';

	import UiLabel from './UiLabel.svelte';
	import { i18nDerived } from '../i18n/i18nDerived';

	type Props = {
		tiled?: boolean;
		stacked?: boolean;
	};

	const props: Props = $props();
</script>

<UiLabel
	tiled={props.tiled}
	stacked={props.stacked}
	label={i18nDerived.freeSpins()}
	value="{stateUi.freeSpinCounter.current} / {stateUi.freeSpinCounter.total}"
/>
