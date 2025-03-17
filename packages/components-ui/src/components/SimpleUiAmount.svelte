<script lang="ts">
	import { ResponsiveText } from 'components-pixi';
	import { Container, Rectangle, type TextProps, anchorToPivot } from 'pixi-svelte';

	type Props = {
		x: TextProps['x'];
		y: TextProps['y'];
		text: TextProps['text'];
		anchor: TextProps['anchor'];
	};

	const { x, y, text, anchor }: Props = $props();
	const sizes = { width: 150, height: 75 };
	const center = { x: sizes.width * 0.5, y: sizes.height * 0.5 };
</script>

<Container {x} {y} pivot={anchorToPivot({ sizes, anchor })}>
	<Rectangle {...sizes} backgroundColor={0xffffff} />
	<ResponsiveText
		{text}
		{...center}
		anchor={0.5}
		maxWidth={sizes.width - 10}
		style={{ fontSize: 15, align: 'center' }}
	/>
</Container>
