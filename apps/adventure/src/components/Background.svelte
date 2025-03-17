<script lang="ts">
	import { Rectangle } from 'pixi-svelte';

	import { getContext } from '../game/context';

	const context = getContext();
	const backgroundSizes = $derived.by(context.stateLayoutDerived.canvasSizes);
</script>

<Rectangle {...backgroundSizes} backgroundColor={0x11a321} zIndex={-2} />
