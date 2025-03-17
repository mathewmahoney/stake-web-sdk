<script lang="ts">
	import { Container, Text, type ContainerProps, Rectangle, anchorToPivot } from 'pixi-svelte';
	import { getLayoutContext } from 'utils-layout';

	type Props = Omit<ContainerProps, 'x' | 'y' | 'scale' | 'pivot'> & {
		debug?: boolean;
		vertical?: 'center' | 'bottom';
		horizontal?: 'center' | 'left' | 'right';
	};

	const { debug, vertical, horizontal, children, ...containerProps }: Props = $props();
	const context = getLayoutContext();

	const mainLayout = $derived.by(context.stateLayoutDerived.mainLayout);
	const canvasSizes = $derived.by(context.stateLayoutDerived.canvasSizes);
	const getY = () => {
		const bottomY = canvasSizes.height * 0.5 - mainLayout.height * mainLayout.scale * 0.5;
		return vertical === 'bottom' ? bottomY : 0;
	};
	const getX = () => {
		if (horizontal === 'left')
			return -canvasSizes.width * 0.5 + mainLayout.width * mainLayout.scale * 0.5;
		if (horizontal === 'right')
			return canvasSizes.width * 0.5 - mainLayout.width * mainLayout.scale * 0.5;
		return 0;
	};
	const y = $derived.by(getY);
	const x = $derived.by(getX);
</script>

<Container {x} {y}>
	<Container
		{...containerProps}
		x={mainLayout.x}
		y={mainLayout.y}
		scale={mainLayout.scale}
		pivot={anchorToPivot({
			anchor: mainLayout.anchor,
			sizes: { width: mainLayout.width, height: mainLayout.height },
		})}
	>
		{#if debug}
			<Rectangle width={mainLayout.width} height={mainLayout.height} alpha={0.8} />
			<Text
				text={`layoutType: ${context.stateLayoutDerived.layoutType()}

scale: ${context.stateLayoutDerived.mainLayout().scale}

mainSizes: {
	width: ${context.stateLayoutDerived.mainLayout().width}
	height: ${context.stateLayoutDerived.mainLayout().height}
}

canvasSizes: {
		width: ${context.stateLayoutDerived.canvasSizes().width}
		height: ${context.stateLayoutDerived.canvasSizes().height}
}`}
				style={{ fill: 0xffffff }}
			/>
		{/if}
		{@render children()}
	</Container>
</Container>
