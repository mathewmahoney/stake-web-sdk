<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { SpineBone, SpineProvider, SpineTrack } from 'pixi-svelte';
	import { OnHotkey } from 'components-shared';

	import { getContext } from '../game/context';

	type Props = {
		onInitialised: () => void;
	};

	const props: Props = $props();

	const ANIMATION_NAME_LIST = [
		'aim',
		'death',
		'hoverboard',
		'idle',
		'idle-turn',
		'jump',
		'portal',
		'run',
		'run-to-idle',
		'shoot',
		'walk',
	] as const;

	type AnimationName = (typeof ANIMATION_NAME_LIST)[number];
	type Direction = 'left' | 'right';

	const context = getContext();
	const x = new Tween(context.stateLayoutDerived.mainLayout().width * 0.5);
	const WALK_DISTANCE = 50;
	const RUN_DISTANCE = 150;
	const stateCharacter = $state({
		initialising: true,
		shoot: false,
		// move
		jumping: false,
		moveState: 'idle' as 'idle' | 'walk' | 'run',
		moveDirection: 'right' as Direction,
		moveDistance: WALK_DISTANCE as typeof WALK_DISTANCE | typeof RUN_DISTANCE,
	});
	const disabled = $derived(stateCharacter.initialising);

	const spinTrack = $derived.by(() => {
		if (stateCharacter.initialising) {
			return {
				animationName: 'portal',
				loop: false,
			};
		}

		if (stateCharacter.jumping) {
			return {
				animationName: 'jump' as AnimationName,
				loop: false,
			};
		}

		if (stateCharacter.moveState === 'idle') {
			return {
				animationName: 'idle' as AnimationName,
				loop: true,
			};
		}

		if (stateCharacter.moveState === 'walk') {
			return {
				animationName: 'walk' as AnimationName,
				loop: true,
			};
		}

		if (stateCharacter.moveState === 'run') {
			return {
				animationName: 'run' as AnimationName,
				loop: true,
			};
		}

		return {
			animationName: 'idle' as AnimationName,
			loop: true,
		};
	});

	const boundaries = $derived({
		left: 0,
		right: context.stateLayoutDerived.mainLayout().width,
	});

	const move = () => {
		const target =
			x.current +
			(stateCharacter.moveDirection === 'right'
				? stateCharacter.moveDistance
				: -stateCharacter.moveDistance);

		const targetWithBoundaries = (() => {
			if (target <= boundaries.left) return boundaries.left;
			if (target >= boundaries.right) return boundaries.right;
			return target;
		})();

		return x.set(targetWithBoundaries);
	};

	const walk = async (direction: Direction) => {
		stateCharacter.moveState = 'walk';
		stateCharacter.moveDirection = direction;
		stateCharacter.moveDistance = WALK_DISTANCE;
		move();
	};

	const run = (direction: Direction) => {
		stateCharacter.moveState = 'run';
		stateCharacter.moveDirection = direction;
		stateCharacter.moveDistance = RUN_DISTANCE;
		move();
	};

	const resetMove = () => {
		stateCharacter.moveState = 'idle';
		x.set(x.current, { duration: 0 });
	};

	const jump = () => {
		x.current; // trigger hold
		stateCharacter.jumping = true;
	};

	const shoot = () => {
		stateCharacter.shoot = true;
		context.eventEmitter.broadcast({ type: 'bet' });
		context.eventEmitter.broadcast({ type: 'chestHit' });
	};
</script>

<OnHotkey
	{disabled}
	hotkey="ArrowRight"
	onpress={() => walk('right')}
	onhold={() => run('right')}
	onpressend={resetMove}
	onholdend={resetMove}
/>

<OnHotkey
	{disabled}
	hotkey="ArrowLeft"
	onpress={() => walk('left')}
	onhold={() => run('left')}
	onpressend={resetMove}
	onholdend={resetMove}
/>

<OnHotkey {disabled} hotkey="ArrowUp" onpress={jump} onhold={jump} />

<OnHotkey
	disabled={disabled || !context.stateXstateDerived.isIdle()}
	hotkey="Space"
	onpress={shoot}
	onhold={shoot}
/>

<SpineProvider
	x={x.current}
	y={context.stateLayoutDerived.mainLayout().height}
	key="spineBoy"
	width={100}
	scale={stateCharacter.moveDirection === 'right' ? { x: 1, y: 1 } : { x: -1, y: 1 }}
>
	<SpineTrack
		trackIndex={0}
		{...spinTrack}
		mixDuration={0.1}
		listener={{
			complete: () => {
				if (stateCharacter.jumping) {
					stateCharacter.jumping = false;
				}
				if (stateCharacter.initialising) {
					stateCharacter.initialising = false;
					props.onInitialised();
				}
			},
		}}
	/>

	{#if stateCharacter.shoot}
		<SpineBone boneName="crosshair" x={500} y={-350} />

		<SpineTrack loop trackIndex={1} animationName="aim" mixDuration={0.1} />

		<SpineTrack
			trackIndex={2}
			animationName="shoot"
			mixDuration={0.1}
			listener={{
				complete: () => {
					stateCharacter.shoot = false;
				},
			}}
		/>
	{/if}
</SpineProvider>
