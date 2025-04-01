<script lang="ts">
	import type { Snippet } from 'svelte';

	import BaseContent from './BaseContent.svelte';
	import BaseScrollable from './BaseScrollable.svelte';

	type Props = {
		rtpBadge: Snippet<[{ size: string }]>;
		betAmount: Snippet;
		bonusCardsActivate: Snippet;
		bonusCardsBuy: Snippet;
	};

	const props: Props = $props();
</script>

<BaseContent maxWidth="100%">
	<div class="badge-icon-wrap">
		{@render props.rtpBadge({ size: '7rem' })}
	</div>

	{@render props.betAmount()}

	<BaseScrollable type="column">
		<div class="bonuses-wrap">
			{@render props.bonusCardsActivate()}
			{@render props.bonusCardsBuy()}
		</div>
	</BaseScrollable>
</BaseContent>

<style lang="scss">
	.badge-icon-wrap {
		position: fixed;
		top: 1rem;
		left: 1rem;
	}

	.bonuses-wrap {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
