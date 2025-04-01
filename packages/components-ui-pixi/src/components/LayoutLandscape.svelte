<script lang="ts">
	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle, anchorToPivot } from 'pixi-svelte';

	import UiSprite from './UiSprite.svelte';
	import { LANDSCAPE_BASE_SIZE, LANDSCAPE_BACKGROUND_WIDTH_LIST } from '../constants';
	import { getContext } from '../context';
	import type { LayoutUiProps } from '../types';

	const props: LayoutUiProps = $props();
	const context = getContext();
</script>

<Container x={20}>
	{@render props.gameName()}
</Container>

<Container x={context.stateLayoutDerived.canvasSizes().width - 20}>
	{@render props.logo()}
</Container>

<MainContainer standard alignVertical="bottom">
	<Container
		x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
		y={context.stateLayoutDerived.mainLayoutStandard().height - LANDSCAPE_BASE_SIZE - 40}
		pivot={anchorToPivot({
			anchor: { x: 0.5, y: 0 },
			sizes: {
				height: LANDSCAPE_BASE_SIZE,
				width: LANDSCAPE_BACKGROUND_WIDTH_LIST.reduce((sum, width) => sum + width, 0),
			},
		})}
	>
		<UiSprite
			key="background_menu_frame"
			height={LANDSCAPE_BASE_SIZE}
			width={LANDSCAPE_BACKGROUND_WIDTH_LIST[0]}
			tint={BLACK}
			alpha={0.8}
		/>

		<UiSprite
			x={LANDSCAPE_BACKGROUND_WIDTH_LIST[0]}
			key="background_balance_frame"
			height={LANDSCAPE_BASE_SIZE}
			width={LANDSCAPE_BACKGROUND_WIDTH_LIST[1]}
			tint={BLACK}
			alpha={0.35}
		/>

		<UiSprite
			x={LANDSCAPE_BACKGROUND_WIDTH_LIST[0] + LANDSCAPE_BACKGROUND_WIDTH_LIST[1]}
			key="background_bet_amount_frame_landscape"
			height={LANDSCAPE_BASE_SIZE}
			width={LANDSCAPE_BACKGROUND_WIDTH_LIST[2]}
			tint={BLACK}
			alpha={0.8}
		/>

		<Container y={LANDSCAPE_BASE_SIZE * 0.5} x={85} scale={0.8}>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>

		<Container y={LANDSCAPE_BASE_SIZE * 0.5} x={267} scale={0.8}>
			{@render props.buttonBuyBonus({ anchor: 0.5 })}
		</Container>

		<Container y={LANDSCAPE_BASE_SIZE * 0.5} x={420} scale={0.6}>
			{@render props.amountBalance({ stacked: true, anchor: { x: 0, y: 0.5 } })}
		</Container>

		<Container y={LANDSCAPE_BASE_SIZE * 0.5} x={900} scale={0.6}>
			{@render props.amountWin({ stacked: true, anchor: { x: 0, y: 0.5 } })}
		</Container>

		<Container y={LANDSCAPE_BASE_SIZE * 0.5} x={1300} scale={0.6}>
			{@render props.amountBet({ stacked: true, anchor: { x: 0, y: 0.5 } })}
		</Container>

		<Container y={LANDSCAPE_BASE_SIZE * 0.5} x={1580} scale={1.2}>
			{@render props.buttonDecrease({ anchor: 0.5 })}
		</Container>

		<Container y={LANDSCAPE_BASE_SIZE * 0.5} x={1710} scale={1.2}>
			{@render props.buttonIncrease({ anchor: 0.5 })}
		</Container>
	</Container>

	<Container
		x={context.stateLayoutDerived.mainLayoutStandard().width - 60}
		y={context.stateLayoutDerived.mainLayoutStandard().height * 0.5}
		pivot={anchorToPivot({
			anchor: { x: 1, y: 0.5 },
			sizes: {
				height: LANDSCAPE_BASE_SIZE * (341 / 94),
				width: LANDSCAPE_BASE_SIZE,
			},
		})}
	>
		<UiSprite
			key="background_bet_frame_landscape"
			height={LANDSCAPE_BASE_SIZE * (341 / 94)}
			width={LANDSCAPE_BASE_SIZE}
			tint={BLACK}
			alpha={0.8}
		/>

		<Container
			x={LANDSCAPE_BASE_SIZE * 0.5}
			y={LANDSCAPE_BASE_SIZE * (341 / 94) * 0.5 - 205}
			scale={0.9}
		>
			{@render props.buttonAutoBet({ anchor: 0.5 })}
		</Container>

		<Container x={LANDSCAPE_BASE_SIZE * 0.5} y={LANDSCAPE_BASE_SIZE * (341 / 94) * 0.5} scale={1.1}>
			{@render props.buttonBet({ anchor: 0.5 })}
		</Container>

		<Container
			x={LANDSCAPE_BASE_SIZE * 0.5}
			y={LANDSCAPE_BASE_SIZE * (341 / 94) * 0.5 + 205}
			scale={0.9}
		>
			{@render props.buttonTurbo({ anchor: 0.5 })}
		</Container>
	</Container>
</MainContainer>

{#if stateUi.menuOpen}
	<Rectangle
		eventMode="static"
		cursor="pointer"
		alpha={0.5}
		anchor={0.5}
		backgroundColor={BLACK}
		width={context.stateLayoutDerived.canvasSizes().width}
		height={context.stateLayoutDerived.canvasSizes().height}
		x={context.stateLayoutDerived.canvasSizes().width * 0.5}
		y={context.stateLayoutDerived.canvasSizes().height * 0.5}
		onpointerup={() => (stateUi.menuOpen = false)}
	/>

	<MainContainer standard alignVertical="bottom">
		<Container
			x={145}
			y={context.stateLayoutDerived.mainLayoutStandard().height - LANDSCAPE_BASE_SIZE - 40}
		>
			<UiSprite
				anchor={{ x: 0.5, y: 1 }}
				y={150}
				key="popup_sidemenu"
				height={680}
				width={680 * (80 / 352)}
			/>

			<Container scale={0.8} y={LANDSCAPE_BASE_SIZE * 0.5 - 10 - 130 * 4}>
				{@render props.buttonPayTable({ anchor: 0.5 })}
			</Container>

			<Container scale={0.8} y={LANDSCAPE_BASE_SIZE * 0.5 - 10 - 130 * 3}>
				{@render props.buttonGameRules({ anchor: 0.5 })}
			</Container>

			<Container scale={0.8} y={LANDSCAPE_BASE_SIZE * 0.5 - 10 - 130 * 2}>
				{@render props.buttonSettings({ anchor: 0.5 })}
			</Container>

			<Container scale={0.8} y={LANDSCAPE_BASE_SIZE * 0.5 - 10 - 130 * 1}>
				{@render props.buttonSoundSwitch({ anchor: 0.5 })}
			</Container>

			<Container scale={0.8} y={LANDSCAPE_BASE_SIZE * 0.5}>
				{@render props.buttonMenuClose({ anchor: 0.5 })}
			</Container>
		</Container>
	</MainContainer>
{/if}
