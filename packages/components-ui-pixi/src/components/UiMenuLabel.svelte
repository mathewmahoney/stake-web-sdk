<script lang="ts">
	import { Container, Text } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	import { UI_BASE_FONT_SIZE } from '../constants';

	type Props = {
		x: number;
		y: number;
		text: string;
	};

	const props: Props = $props();
</script>

<Container x={props.x} y={props.y}>
	<Text
		text="◂"
		x={-8}
		y={-8}
		anchor={{ x: 0, y: 0.5 }}
		style={{
			fontFamily: 'proxima-nova',
			fill: WHITE,
			fontWeight: 'bold',
			fontSize: UI_BASE_FONT_SIZE * 1.5,
		}}
	/>

	<Text
		x={UI_BASE_FONT_SIZE - 5}
		text={props.text}
		anchor={{ x: 0, y: 0.5 }}
		style={{
			fontFamily: 'proxima-nova',
			fill: WHITE,
			fontWeight: 'bold',
			fontSize: UI_BASE_FONT_SIZE,
		}}
	/>
</Container>
