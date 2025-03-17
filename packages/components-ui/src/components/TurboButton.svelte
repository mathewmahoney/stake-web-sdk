<script lang="ts">
	import { stateBet, stateBetDerived } from 'state-shared';

	import SimpleUiButton from './SimpleUiButton.svelte';
	import { getContext } from '../context';

	const context = getContext();

	const onpress = () => {
		context.eventEmitter.broadcast({ type: 'soundButtonGeneral' });
		stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
	};

	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => stateBetDerived.updateIsTurbo(true, { persistent: false }),
		stopButtonEnable: () => stateBetDerived.updateIsTurbo(false, { persistent: false }),
	});
</script>

<SimpleUiButton
	disabled={stateBet.isSpaceHold}
	{onpress}
	text={`TURBO\n${stateBet.isTurbo ? 'ON' : 'OFF'}`}
	x={context.stateLayoutDerived.canvasSizes().width - 75}
	y={context.stateLayoutDerived.canvasSizes().height}
	anchor={1}
/>
