<script lang="ts">
	import { stateMeta } from 'state-shared';
	import MetaRule from './MetaRule.svelte';

	type Props = {
		type: 'gameRules' | 'payTable';
	};

	const props: Props = $props();

	const rules = $derived(stateMeta.gameRuleMeta[props.type]);
</script>

{#if rules}
	<div class="rules-wrap">
		{#each rules as rule}
			<MetaRule {...rule} />
		{/each}
	</div>
{/if}

<style lang="scss">
	.rules-wrap {
		width: 85%;
		margin: auto;
		max-width: 1080px;

		@media (max-width: 800px) {
			max-width: 6000px;
		}

		@media (max-width: 480px) {
			max-width: 360px;
		}
	}
</style>
