<script lang="ts">
	import {
		Text,
		Container,
		SpineSlot,
		SpineTrack,
		SpineProvider,
		SpineEventEmitterProvider,
		type SpineProviderProps,
	} from 'pixi-svelte';
	import { stateBetDerived } from 'state-shared';
	import { SUPER_GREY, WHITE } from 'constants-shared/colors';

	import { i18nDerived } from '../i18n/i18nDerived';

	type State = 'default' | 'disabled' | 'hovered' | 'pressed' | 'active';

	type Props = Omit<SpineProviderProps, 'children' | 'key'> & {
		state: State;
	};

	const { state: propsState, ...spineProviderProps }: Props = $props();

	type AnimationName =
		| 'buy_button_active_exit'
		| 'buy_button_active_idle'
		| 'buy_button_active_intro'
		| 'buy_button_active_disabled'
		| 'buy_button_click'
		| 'buy_button_disabled'
		| 'buy_button_hover'
		| 'buy_button_idle'
		| 'buy_button_intro';

	type RealState =
		| State
		| 'activeDefault'
		| 'activeHovered'
		| 'activeExit'
		| 'activeIntro'
		| 'activeDisabled';

	const STATE_ANIMATION_MAP = {
		default: 'buy_button_idle',
		disabled: 'buy_button_disabled',
		hovered: 'buy_button_hover',
		pressed: 'buy_button_click',
		active: 'buy_button_active_idle',
		activeHovered: 'buy_button_active_hover',
		activeDisabled: 'buy_button_active_disabled',
		activeIntro: 'buy_button_active_intro',
		activeExit: 'buy_button_active_exit',
	} as { [key in RealState]: string };

	let loop = $state(true);
	let isAnimating = $state(false);
	let realState: RealState = $state('default');

	const getAnimationName = (stateValue: RealState) =>
		(STATE_ANIMATION_MAP?.[stateValue] || STATE_ANIMATION_MAP.default) as AnimationName;

	const reelStateEffect = () => {
		if (propsState === 'pressed' && (realState === 'activeHovered' || realState === 'active')) {
			loop = false;
			realState = 'activeExit';
			isAnimating = true;
			return;
		}

		if (propsState === 'active' && realState === 'default') {
			loop = false;
			realState = 'activeIntro';
			isAnimating = true;
			return;
		}

		if (realState === 'active' && propsState === 'hovered') {
			realState = 'activeHovered';
			return;
		}

		if (stateBetDerived.activeBetMode().type === 'activate' && propsState === 'disabled') {
			realState = 'activeDisabled';
			if (isAnimating) isAnimating = false;
			return;
		}

		if (stateBetDerived.activeBetMode().type === 'default' && propsState === 'disabled') {
			realState = 'disabled';
			if (isAnimating) isAnimating = false;
			return;
		}

		if (!isAnimating || propsState === 'active') {
			realState = propsState;
		}
	};

	$effect(() => {
		propsState;
		reelStateEffect();
	});

	const animationName = $derived(getAnimationName(realState));
</script>

<SpineProvider key="bonusButton" {...spineProviderProps}>
	<SpineTrack
		{loop}
		trackIndex={0}
		{animationName}
		listener={{
			complete: (entry) => {
				if (entry?.animation?.name === 'buy_button_active_exit') {
					if (propsState === 'hovered') {
						realState = 'hovered';
					} else {
						realState = 'default';
					}
					loop = true;
					isAnimating = false;
					return;
				}
				if (entry?.animation?.name === 'buy_button_active_intro') {
					if (propsState === 'hovered') {
						realState = 'activeHovered';
					} else {
						realState = 'active';
					}
					loop = true;
					isAnimating = false;
					return;
				}
				if (entry?.animation?.name === 'buy_button_click') {
					realState = 'default';
					return;
				}
			},
		}}
	/>
	<SpineEventEmitterProvider>
		<SpineSlot slotName="slot_text">
			<Container>
				<Text
					text={i18nDerived.disable()}
					anchor={{ x: 0.5, y: 0.5 }}
					style={{
						fontFamily: 'proxima-nova',
						fontSize: (spineProviderProps?.width || 0) * 0.08,
						fontWeight: 'bold',
						fill: realState === 'activeDisabled' ? SUPER_GREY : WHITE,
						wordWrap: true,
						wordWrapWidth: 0,
						align: 'center',
						lineHeight: 80,
					}}
				/>
			</Container>
		</SpineSlot>
	</SpineEventEmitterProvider>
</SpineProvider>
