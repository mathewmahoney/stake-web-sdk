<script lang="ts">
	import { Sprite, type SpriteProps, REM } from 'pixi-svelte';

	type Props = {
		key: SpriteProps['key'];
		sizeRatio: number;
	};

	const props: Props = $props();
	const height = REM * 1.8;
</script>

<Sprite anchor={{ x: 1, y: 0 }} key={props.key} {height} width={height * props.sizeRatio} />
