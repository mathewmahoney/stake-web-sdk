<script lang="ts">
	import { Rectangle, type RectangleProps } from 'pixi-svelte';
	import { getLayoutContext } from 'utils-layout';

	type Props = Omit<RectangleProps, 'width' | 'height'>;

	const props: Props = $props();
	const context = getLayoutContext();
</script>

<Rectangle
	{...props}
	width={context.stateLayoutDerived.canvasSizes().width}
	height={context.stateLayoutDerived.canvasSizes().height}
/>
