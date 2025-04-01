<script lang="ts">
	import type { GameRuleData } from 'state-shared';
	import { resizeObserver, type ContentRect } from 'utils-resize-observer';

	import MetaRuleContainers from './MetaRuleContainers.svelte';
	import MetaRuleText from './MetaRuleText.svelte';

	type Props = GameRuleData;

	const props: Props = $props();

	const BREAK_POINT = 600;

	let contentRect = $state({ width: 0, height: 0, left: 0, top: 0 } as ContentRect);

	const modalWidth = $derived(contentRect?.width || 0);
</script>

<div class="wrap" use:resizeObserver={(value) => (contentRect = value)}>
	{#if props.title !== ''}
		<div class="title">
			<span>{props.title}</span>
			<hr class="divider" />
		</div>
	{/if}
	<MetaRuleContainers rows={props.rows} containers={props.containers}>
		{#snippet children({ container })}
			<div
				class="rule-wrap"
				class:rule-wrap-columns-1={props.columns === 1}
				class:rule-wrap-columns-3={props.columns === 3}
				class:rule-wrap-image-left={container.image &&
					container?.imagePosition === 'left' &&
					modalWidth >= BREAK_POINT}
				class:rule-wrap-image-top={(container.image && container?.imagePosition === 'top') ||
					modalWidth < BREAK_POINT}
			>
				{#if container.image && container.image !== ''}
					<div class="img-wrap">
						<picture>
							<img
								class="container-image"
								src={container.image}
								alt={container.title}
								draggable="false"
							/>
						</picture>
					</div>
				{/if}
				<div class="rule-content">
					{#if container.title !== ''}
						<span class="container-title">{container.title}</span>
					{/if}
					<MetaRuleText text={container.text} textImages={container.textImages} />
				</div>
			</div>
		{/snippet}
	</MetaRuleContainers>
</div>

<style lang="scss">
	.wrap {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		padding-top: 2rem;
	}

	.title,
	.container-title {
		font-weight: 600;
		font-size: 2rem;
		text-align: center;
	}

	.title {
		font-size: 2.5rem;
		font-weight: 900;
	}

	.divider {
		border: 0;
		height: 2px;
		background: linear-gradient(
			to left,
			transparent 0%,
			white 15%,
			white 50%,
			white 85%,
			transparent 100%
		);
		width: 100%;
		margin: 0px 0px 1rem;
	}

	.rule-wrap {
		display: grid;
		justify-content: center;
	}

	.rule-wrap-image-left {
		grid-template-columns: 30% 1fr;
		align-items: center;

		&.rule-wrap-columns-3 {
			grid-template-columns: 60% auto;
			align-items: center;
		}

		.rule-content {
			text-align: left;
			font-size: 0.8rem;
		}
	}

	.rule-wrap-image-top {
		grid-template-rows: auto auto;
		justify-items: center;
	}

	.container-image {
		max-width: 100%;
		max-height: 100%;
		height: inherit !important;
		object-fit: contain;
	}

	.rule-wrap-columns-1 {
		grid-gap: 5%;
		margin-bottom: 1.5rem;

		&.rule-wrap-image-left {
			grid-gap: 10%;
		}
	}

	.rule-content {
		display: grid;
		text-align: center;
	}

	.img-wrap {
		max-height: 100%;
		max-width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
