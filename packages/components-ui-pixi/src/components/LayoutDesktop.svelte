<script lang="ts">
	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle, anchorToPivot } from 'pixi-svelte';

	import UiSprite from './UiSprite.svelte';
	import { DESKTOP_BASE_SIZE, DESKTOP_BACKGROUND_WIDTH_LIST } from '../constants';
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

<UiSprite
	x={0}
	y={context.stateLayoutDerived.canvasSizes().height + 1}
	anchor={{ x: 0, y: 1 }}
	key="desktop_gradient"
	width={context.stateLayoutDerived.canvasSizes().width}
	height={context.stateLayoutDerived.canvasSizes().width * (320 / 1920)}
/>

<MainContainer standard alignVertical="bottom">
	<Container
		x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
		y={context.stateLayoutDerived.mainLayoutStandard().height - DESKTOP_BASE_SIZE - 40}
		pivot={anchorToPivot({
			anchor: { x: 0.5, y: 0 },
			sizes: {
				height: DESKTOP_BASE_SIZE,
				width: DESKTOP_BACKGROUND_WIDTH_LIST.reduce((sum, width) => sum + width, 0),
			},
		})}
	>
		<UiSprite
			key="background_menu_frame"
			height={DESKTOP_BASE_SIZE}
			width={DESKTOP_BACKGROUND_WIDTH_LIST[0]}
			tint={BLACK}
			alpha={0.8}
		/>

		<UiSprite
			x={DESKTOP_BACKGROUND_WIDTH_LIST[0]}
			key="background_balance_frame"
			height={DESKTOP_BASE_SIZE}
			width={DESKTOP_BACKGROUND_WIDTH_LIST[1]}
			tint={BLACK}
			alpha={0.35}
		/>

		<UiSprite
			x={DESKTOP_BACKGROUND_WIDTH_LIST[0] + DESKTOP_BACKGROUND_WIDTH_LIST[1]}
			key="background_bet_amount_frame"
			height={DESKTOP_BASE_SIZE}
			width={DESKTOP_BACKGROUND_WIDTH_LIST[2]}
			tint={BLACK}
			alpha={0.8}
		/>

		<UiSprite
			x={DESKTOP_BACKGROUND_WIDTH_LIST[0] +
				DESKTOP_BACKGROUND_WIDTH_LIST[1] +
				DESKTOP_BACKGROUND_WIDTH_LIST[2]}
			key="background_bet_frame"
			height={DESKTOP_BASE_SIZE}
			width={DESKTOP_BACKGROUND_WIDTH_LIST[3]}
			tint={BLACK}
			alpha={0.8}
		/>

		<Container y={DESKTOP_BASE_SIZE * 0.5} x={63} scale={0.65}>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5} x={218} scale={0.8}>
			{@render props.buttonBuyBonus({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5} x={360} scale={0.5}>
			{@render props.amountBalance({ stacked: true, anchor: { x: 0, y: 0.5 } })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5} x={750} scale={0.5}>
			{@render props.amountWin({ stacked: true, anchor: { x: 0, y: 0.5 } })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5} x={1040} scale={0.5}>
			{@render props.amountBet({ stacked: true, anchor: { x: 0, y: 0.5 } })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5 - 30} x={1330} scale={0.6}>
			{@render props.buttonIncrease({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5 + 30} x={1330} scale={0.6}>
			{@render props.buttonDecrease({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5} x={1425} scale={0.6}>
			{@render props.buttonAutoBet({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5} x={1565} scale={0.8}>
			{@render props.buttonBet({ anchor: 0.5 })}
		</Container>

		<Container y={DESKTOP_BASE_SIZE * 0.5} x={1705} scale={0.6}>
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
			x={140}
			y={context.stateLayoutDerived.mainLayoutStandard().height - DESKTOP_BASE_SIZE - 40}
		>
			<UiSprite
				anchor={{ x: 0.5, y: 1 }}
				y={DESKTOP_BASE_SIZE}
				key="popup_sidemenu"
				height={550}
				width={550 * (80 / 352)}
			/>

			<Container scale={0.65} y={DESKTOP_BASE_SIZE * 0.5 - 15 - 100 * 4}>
				{@render props.buttonPayTable({ anchor: 0.5 })}
			</Container>

			<Container scale={0.65} y={DESKTOP_BASE_SIZE * 0.5 - 15 - 100 * 3}>
				{@render props.buttonGameRules({ anchor: 0.5 })}
			</Container>

			<Container scale={0.65} y={DESKTOP_BASE_SIZE * 0.5 - 15 - 100 * 2}>
				{@render props.buttonSettings({ anchor: 0.5 })}
			</Container>

			<Container scale={0.65} y={DESKTOP_BASE_SIZE * 0.5 - 15 - 100 * 1}>
				{@render props.buttonSoundSwitch({ anchor: 0.5 })}
			</Container>

			<Container scale={0.65} y={DESKTOP_BASE_SIZE * 0.5}>
				{@render props.buttonMenuClose({ anchor: 0.5 })}
			</Container>
		</Container>
	</MainContainer>
{/if}
