<script lang="ts" module>
	export type ChestEmitterEvent =
		| { type: 'chestShow' }
		| { type: 'chestHide' }
		| { type: 'chestHit' }
		| { type: 'chestWin' }
		| { type: 'chestReset' };
</script>

<script lang="ts">
	import { BitmapText, Container, SpineProvider, SpineTrack } from 'pixi-svelte';
	import { waitForResolve } from 'utils-shared/wait';

	import { getContext } from '../game/context';

	const context = getContext();

	const stateChest = $state({
		state: 'idle' as 'idle' | 'hit' | 'win',
	});

	const spineInfo = $derived.by(() => {
		if (stateChest.state === 'hit') {
			return {
				key: 'H2',
				animationName: 'h2',
			};
		}

		if (stateChest.state === 'win') {
			return {
				key: 'explosion',
				animationName: 'explosion',
			};
		}

		return {
			key: 'H2',
			animationName: 'h2_static',
		};
	});

	let onComplete = () => {};
	let show = $state(true);

	context.eventEmitter.subscribeOnMount({
		chestShow: () => (show = true),
		chestHide: () => (show = false),
		chestHit: async () => {
			stateChest.state = 'hit';
			await waitForResolve((resolve) => (onComplete = resolve));
		},
		chestWin: async () => {
			stateChest.state = 'win';
			await waitForResolve((resolve) => (onComplete = resolve));
		},
		chestReset: () => {
			stateChest.state = 'idle';
		},
	});
</script>

{#if show}
	<Container
		x={context.stateLayoutDerived.mainLayout().width - 150}
		y={context.stateLayoutDerived.mainLayout().height - 70}
	>
		<SpineProvider key={spineInfo.key} width={50}>
			<SpineTrack
				trackIndex={0}
				animationName={spineInfo.animationName}
				listener={{
					complete: () => {
						onComplete();
					},
				}}
			/>
		</SpineProvider>

		<BitmapText
			anchor={0.5}
			text={`$1`}
			style={{
				fontFamily: 'gold',
				fontSize: 50,
				letterSpacing: -5,
			}}
		/>
	</Container>
{/if}
