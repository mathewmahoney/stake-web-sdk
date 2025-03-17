<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';

	import { getContext } from '../game/context';

	const context = getContext();
</script>

<Container alpha={0.5}>
	<Rectangle width={280} height={130} />
	<Text text={'TRANSLATIONS TEST'} style={{ fill: 0xffffff }} />
	<Text text={`${context.i18nDerived.home()} (from game)`} style={{ fill: 0xffffff }} y={30} />
	<Text text={`${context.i18nDerived.advanced()} (from ui)`} style={{ fill: 0xffffff }} y={60} />
	<Text text={`${context.i18nDerived.notTranslated()}`} style={{ fill: 0xffffff }} y={90} />
</Container>
