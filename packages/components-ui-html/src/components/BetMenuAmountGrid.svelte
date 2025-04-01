<script lang="ts">
	import { Button } from 'components-shared';
	import { stateBet, stateConfig } from 'state-shared';
	import { getLayoutContext } from 'utils-layout';
	import { i18nDerived } from '../i18n/i18nDerived';

	const { stateLayoutDerived } = getLayoutContext();
	const count = $derived(stateLayoutDerived.layoutType() === 'landscape' ? 15 : 18);
	const options = $derived(
		[
			...stateConfig.betMenuOptions.slice(0, count - 1),
			...stateConfig.betMenuOptions.slice(-1),
		].filter((value, index, array) => array.indexOf(value) === index),
	); //always includes last, and without duplicate

	const isMaxValue = (value: number) => value === options[options.length - 1];
	const formatValue = (value: number) => {
		if (Math.abs(value) > 999999) {
			return `${(Math.abs(value) / 1000000).toFixed(2)}M`;
		}
		if (Math.abs(value) > 999) {
			return `${(Math.abs(value) / 1000).toFixed(2)}K`;
		}
		return Math.abs(value).toFixed(2);
	};
</script>

<div class="wrap">
	<div class="grid-wrap">
		<div class="grid">
			{#each options as option (option)}
				<Button
					variant={option === stateBet.betAmount ? 'primary' : 'light'}
					spacing="input"
					shape="rounded"
					border="white"
					onclick={() => (stateBet.betAmount = option)}
				>
					<span data-test="round-options">
						{isMaxValue(option) ? i18nDerived.max() : formatValue(option)}
					</span>
				</Button>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.wrap {
		text-align: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
		min-width: 300px;
		// portrait width range: (320px - screen height)
		@media (orientation: portrait) {
			@media (min-width: 320px) {
				min-width: 200px;
			}
			@media (min-width: 360px) {
				min-width: 260px;
			}
			@media (min-width: 480px) {
				min-width: 280px;
			}
		}
		// landscape height range: (320px - 610px)
		@media (orientation: landscape) {
			@media (max-height: 480px) {
				min-width: 400px;
			}
		}
	}

	.grid-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.grid {
		display: grid;
		gap: 0.8rem;
		justify-items: center;
		white-space: nowrap;
		grid-template-columns: repeat(3, 85px);
		// mobile in portrait has max width 600px
		@media (orientation: portrait) {
			@media (max-width: 600px) {
				gap: 0.6rem;
				grid-template-columns: repeat(3, 75px);
			}
		}

		// landscape height range: (200px - 610px)
		@media (orientation: landscape) {
			@media (max-height: 300px) {
				gap: 0.35em;
				grid-template-columns: repeat(5, 70px);
			}
			@media (min-height: 300px) and (max-height: 480px) {
				gap: 0.35rem;
				grid-template-columns: repeat(5, 70px);
			}
		}
	}
</style>
