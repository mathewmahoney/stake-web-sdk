<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_SIZE } from '../constants';

	type Props = {
		label: string;
		value: string;
		tiled?: boolean;
		stacked?: boolean;
	};

	const props: Props = $props();

	const labelStyle = {
		fontFamily: 'proxima-nova',
		fontSize: UI_BASE_SIZE,
		fontWeight: 'bold',
		fill: WHITE,
	} as const;

	const valueStyle = {
		fontFamily: 'proxima-nova',
		fontSize: UI_BASE_SIZE,
		fontWeight: 'lighter',
		fill: WHITE,
	} as const;
</script>

{#if props.stacked}
	{#if props.tiled}
		<UiSprite
			y={-30}
			anchor={{ x: 0.5, y: 0 }}
			key="base_ticker"
			width={UI_BASE_SIZE * 2.5 * (326 / 73)}
			height={UI_BASE_SIZE * 2.5}
			tint={0x000000}
		/>
	{/if}
	<Text anchor={{ x: 0.5, y: 0 }} text={props.label} style={labelStyle} />
	<Text anchor={{ x: 0.5, y: 0 }} text={props.value} style={valueStyle} y={UI_BASE_SIZE} />
{:else}
	{#if props.tiled}
		<UiSprite
			x={-90}
			anchor={{ x: 0, y: 0.5 }}
			key="base_ticker"
			width={UI_BASE_SIZE * 2.5 * (326 / 73)}
			height={UI_BASE_SIZE * 2.5}
			tint={0x000000}
		/>
	{/if}
	<Text anchor={{ x: 0, y: 0.5 }} text={props.label} style={labelStyle} />
	<Text anchor={{ x: 1, y: 0.5 }} text={props.value} style={valueStyle} x={UI_BASE_SIZE * 10} />
{/if}
