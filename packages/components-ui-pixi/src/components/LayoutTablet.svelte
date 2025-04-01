<script lang="ts">
	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle, anchorToPivot } from 'pixi-svelte';

	import UiSprite from './UiSprite.svelte';
	import LabelWin from './LabelWin.svelte';
	import LabelFreeSpinCounter from './LabelFreeSpinCounter.svelte';
	import { TABLET_BASE_SIZE, TABLET_BACKGROUND_WIDTH_LIST } from '../constants';
	import type { LayoutUiProps } from '../types';
	import { getContext } from '../context';

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
	{@const sizes = {
		height: TABLET_BASE_SIZE,
		width: TABLET_BACKGROUND_WIDTH_LIST.reduce((sum, width) => sum + width, 0),
	}}
	<Container
		x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
		y={context.stateLayoutDerived.mainLayoutStandard().height - TABLET_BASE_SIZE - 55}
		pivot={anchorToPivot({
			anchor: { x: 0.5, y: 0 },
			sizes,
		})}
	>
		<UiSprite
			key="background_menu_frame"
			height={TABLET_BASE_SIZE}
			width={TABLET_BACKGROUND_WIDTH_LIST[0]}
			tint={BLACK}
			alpha={0.8}
		/>

		<UiSprite
			x={TABLET_BACKGROUND_WIDTH_LIST[0]}
			key="background_balance_frame"
			height={TABLET_BASE_SIZE}
			width={TABLET_BACKGROUND_WIDTH_LIST[1]}
			tint={BLACK}
			alpha={0.35}
		/>

		<UiSprite
			x={TABLET_BACKGROUND_WIDTH_LIST[0] + TABLET_BACKGROUND_WIDTH_LIST[1]}
			key="background_bet_amount_frame"
			height={TABLET_BASE_SIZE}
			width={TABLET_BACKGROUND_WIDTH_LIST[2]}
			tint={BLACK}
			alpha={0.8}
		/>

		<UiSprite
			x={TABLET_BACKGROUND_WIDTH_LIST[0] +
				TABLET_BACKGROUND_WIDTH_LIST[1] +
				TABLET_BACKGROUND_WIDTH_LIST[2]}
			key="background_bet_frame"
			height={TABLET_BASE_SIZE}
			width={TABLET_BACKGROUND_WIDTH_LIST[3]}
			tint={BLACK}
			alpha={0.8}
		/>

		<Container y={TABLET_BASE_SIZE * 0.5} x={85} scale={0.9}>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE * 0.5} x={290} scale={1.05}>
			{@render props.buttonBuyBonus({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE * 0.5} x={470} scale={0.7}>
			{@render props.amountBalance({ stacked: true, anchor: { x: 0, y: 0.5 } })}
		</Container>

		<Container y={TABLET_BASE_SIZE * 0.5} x={990} scale={0.7}>
			{@render props.amountBet({ stacked: true, anchor: { x: 0, y: 0.5 } })}
		</Container>

		<Container y={TABLET_BASE_SIZE * 0.5 - 38} x={1240} scale={0.7}>
			{@render props.buttonIncrease({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE * 0.5 + 38} x={1240} scale={0.7}>
			{@render props.buttonDecrease({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE * 0.5} x={1555 - 190} scale={0.8}>
			{@render props.buttonAutoBet({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE * 0.5} x={1555} scale={1.2}>
			{@render props.buttonBet({ anchor: 0.5 })}
		</Container>

		<Container y={TABLET_BASE_SIZE * 0.5} x={1555 + 190} scale={0.8}>
			{@render props.buttonTurbo({ anchor: 0.5 })}
		</Container>

		<Container x={sizes.width * 0.5 - 225 - 285} y={-70} scale={0.3}>
			<LabelWin tiled />
		</Container>

		{#if stateUi.freeSpinCounterShow}
			<Container x={sizes.width * 0.5 - 225 + 285} y={-70} scale={0.3}>
				<LabelFreeSpinCounter tiled />
			</Container>
		{/if}
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
			x={135}
			y={context.stateLayoutDerived.mainLayoutStandard().height - TABLET_BASE_SIZE - 55}
		>
			<UiSprite
				anchor={{ x: 0.5, y: 1 }}
				y={TABLET_BASE_SIZE * 0.9}
				key="popup_sidemenu"
				height={710}
				width={710 * (80 / 352)}
			/>

			<Container scale={0.9} y={TABLET_BASE_SIZE * 0.5 - 30 - 130 * 4}>
				{@render props.buttonPayTable({ anchor: 0.5 })}
			</Container>

			<Container scale={0.9} y={TABLET_BASE_SIZE * 0.5 - 30 - 130 * 3}>
				{@render props.buttonGameRules({ anchor: 0.5 })}
			</Container>

			<Container scale={0.9} y={TABLET_BASE_SIZE * 0.5 - 30 - 130 * 2}>
				{@render props.buttonSettings({ anchor: 0.5 })}
			</Container>

			<Container scale={0.9} y={TABLET_BASE_SIZE * 0.5 - 30 - 130 * 1}>
				{@render props.buttonSoundSwitch({ anchor: 0.5 })}
			</Container>

			<Container scale={0.9} y={TABLET_BASE_SIZE * 0.5}>
				{@render props.buttonMenuClose({ anchor: 0.5 })}
			</Container>
		</Container>
	</MainContainer>
{/if}
