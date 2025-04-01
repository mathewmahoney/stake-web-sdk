<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	import { stateUi } from 'state-shared';
	import { BLACK } from 'constants-shared/colors';
	import { FadeContainer } from 'components-pixi';
	import { MainContainer } from 'components-layout';
	import { Container, Rectangle } from 'pixi-svelte';
	import { waitForResolve } from 'utils-shared/wait';

	import LabelFreeSpinCounter from './LabelFreeSpinCounter.svelte';
	import ButtonDrawer from './ButtonDrawer.svelte';
	import LabelWin from './LabelWin.svelte';
	import UiSprite from './UiSprite.svelte';
	import { PORTRAIT_BASE_SIZE } from '../constants';
	import type { LayoutUiProps } from '../types';
	import { getContext } from '../context';

	const props: LayoutUiProps = $props();
	const context = getContext();

	const DRAWER_Y = {
		unfold: 0,
		fold: 550,
	};
	const drawerTween = new Tween(stateUi.drawerFold ? DRAWER_Y.fold : DRAWER_Y.unfold, {
		easing: cubicInOut,
	});

	const DRAWER_BUTTON_Y = {
		unfold: 0,
		fold: 50,
	};
	const drawerButtonTween = new Tween(
		stateUi.drawerFold ? DRAWER_BUTTON_Y.fold : DRAWER_BUTTON_Y.unfold,
		{
			easing: cubicInOut,
		},
	);

	let drawerButtonFadeComplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		drawerButtonShow: async () => {
			if (!stateUi.drawerButtonShow) {
				stateUi.drawerButtonShow = true;
				await waitForResolve((resolve) => (drawerButtonFadeComplete = resolve));
			}
		},
		drawerButtonHide: async () => {
			if (stateUi.drawerButtonShow) {
				stateUi.drawerButtonShow = false;
				await waitForResolve((resolve) => (drawerButtonFadeComplete = resolve));
			}
		},
		drawerUnfold: async () => {
			if (stateUi.drawerFold) {
				drawerButtonTween.set(DRAWER_BUTTON_Y.unfold);
				await drawerTween.set(DRAWER_Y.unfold);
			}
		},
		drawerFold: async () => {
			if (!stateUi.drawerFold) {
				drawerButtonTween.set(DRAWER_BUTTON_Y.fold);
				await drawerTween.set(DRAWER_Y.fold);
			}
		},
	});
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
	tint={BLACK}
	key="background_ui_gradient_portrait"
	width={context.stateLayoutDerived.canvasSizes().width}
	height={context.stateLayoutDerived.canvasSizes().width * (320 / 1656)}
/>

<MainContainer standard alignVertical="bottom">
	<!-- drawer container -->
	<Container y={drawerTween.current}>
		<UiSprite
			anchor={0.5}
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 400}
			key="background_bet_frame_portrait"
			width={PORTRAIT_BASE_SIZE * (574 / 106)}
			height={PORTRAIT_BASE_SIZE}
			tint={0x000000}
			alpha={0.8}
		/>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 - 440}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 400}
		>
			{@render props.buttonMenu({ anchor: 0.5 })}
		</Container>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 + 440}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 400}
			scale={0.8}
		>
			{@render props.buttonBuyBonus({ anchor: 0.5 })}
		</Container>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 400}
			scale={1.2}
		>
			{@render props.buttonBet({ anchor: 0.5 })}
		</Container>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 - 240}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 400}
			scale={1.15}
		>
			{@render props.buttonAutoBet({ anchor: 0.5 })}
		</Container>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 + 240}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 400}
			scale={1.15}
		>
			{@render props.buttonTurbo({ anchor: 0.5 })}
		</Container>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 220}
			scale={0.7}
		>
			{@render props.amountBalance({ anchor: 0.5, stacked: false })}
		</Container>
	</Container>

	<Container y={Math.min(drawerTween.current, 350)}>
		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 670}
			scale={0.3}
		>
			<LabelWin stacked tiled />
		</Container>
	</Container>
</MainContainer>

<MainContainer standard alignVertical="bottom">
	{#if stateUi.freeSpinCounterShow}
		<UiSprite
			anchor={{ x: 0.5, y: 1 }}
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height + 140}
			key="background_bet_amount_frame_portrait"
			width={PORTRAIT_BASE_SIZE * 1.5 * (158 / 90)}
			height={PORTRAIT_BASE_SIZE * 1.5}
			tint={0x000000}
			alpha={0.8}
		/>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 130}
			scale={0.3}
		>
			<LabelFreeSpinCounter stacked />
		</Container>
	{:else}
		<UiSprite
			anchor={{ x: 0.5, y: 1 }}
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height + 20}
			key="background_bet_amount_frame_portrait"
			width={PORTRAIT_BASE_SIZE * 0.9 * (158 / 90)}
			height={PORTRAIT_BASE_SIZE * 0.9}
			tint={0x000000}
			alpha={0.8}
		/>

		<UiSprite
			anchor={{ x: 0.5, y: 1 }}
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 - 240}
			y={context.stateLayoutDerived.mainLayoutStandard().height}
			key="background_increase_frame_portrait"
			width={PORTRAIT_BASE_SIZE * 0.8 * (76 / 90)}
			height={PORTRAIT_BASE_SIZE * 0.8}
			tint={0x000000}
			alpha={0.8}
		/>

		<UiSprite
			anchor={{ x: 0.5, y: 1 }}
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 + 240}
			y={context.stateLayoutDerived.mainLayoutStandard().height}
			key="background_increase_frame_portrait"
			width={PORTRAIT_BASE_SIZE * 0.8 * (76 / 90)}
			height={PORTRAIT_BASE_SIZE * 0.8}
			tint={0x000000}
			alpha={0.8}
		/>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 80}
			scale={0.8}
		>
			{@render props.amountBet({ anchor: 0.5, stacked: true, centerLabel: true })}
		</Container>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 - 240}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 90}
			scale={1.1}
		>
			{@render props.buttonDecrease({ anchor: 0.5 })}
		</Container>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 + 240}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 90}
			scale={1.1}
		>
			{@render props.buttonIncrease({ anchor: 0.5 })}
		</Container>
	{/if}

	<!-- drawer button -->
	<FadeContainer
		persistent
		show={stateUi.drawerButtonShow}
		oncomplete={drawerButtonFadeComplete}
		y={drawerButtonTween.current}
	>
		<UiSprite
			anchor={{ x: 0.5, y: 1 }}
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 + 440}
			y={context.stateLayoutDerived.mainLayoutStandard().height}
			key="background_increase_frame_portrait"
			width={PORTRAIT_BASE_SIZE * 0.8 * (76 / 90)}
			height={PORTRAIT_BASE_SIZE * 0.8}
			tint={0x000000}
			alpha={0.8}
		/>

		<Container
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 + 440}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 105}
			scale={1.1}
		>
			<ButtonDrawer disabled={!stateUi.drawerButtonShow} anchor={0.5} />
		</Container>
	</FadeContainer>
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
			x={context.stateLayoutDerived.mainLayoutStandard().width * 0.5 - 440}
			y={context.stateLayoutDerived.mainLayoutStandard().height - 400}
		>
			<UiSprite
				anchor={{ x: 0.5, y: 1 }}
				y={95}
				key="popup_sidemenu"
				height={920}
				width={920 * (80 / 352)}
			/>

			<Container y={-20 - 175 * 4} scale={1.15}>
				{@render props.buttonPayTable({ anchor: 0.5 })}
			</Container>

			<Container y={-20 - 175 * 3} scale={1.15}>
				{@render props.buttonGameRules({ anchor: 0.5 })}
			</Container>

			<Container y={-20 - 175 * 2} scale={1.15}>
				{@render props.buttonSettings({ anchor: 0.5 })}
			</Container>

			<Container y={-20 - 175 * 1} scale={1.15}>
				{@render props.buttonSoundSwitch({ anchor: 0.5 })}
			</Container>

			<Container>
				{@render props.buttonMenuClose({ anchor: 0.5 })}
			</Container>
		</Container>
	</MainContainer>
{/if}
