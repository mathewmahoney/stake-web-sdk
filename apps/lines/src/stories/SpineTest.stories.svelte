<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { StoryPixiApp } from 'components-storybook';

	import { SpineProvider, SpineTrack } from 'pixi-svelte';

	const ANIMATION_NAME_LIST = ['animation'];

	const { Story } = defineMeta({
		tags: ['autodocs'],
		title: 'Static/Spine/coin',
		component: SpineTrack,
		argTypes: {
			animationName: { control: 'radio', options: ANIMATION_NAME_LIST },
		},
		args: {
			alpha: 1,
			loop: true,
			trackIndex: 0,
			mixDuration: 0,
			animationName: 'animation',
		},
	});

	const assets = {
		coin: {
			type: 'spine',
			src: {
				skeleton: '/spine/coin/coin-pro.json',
				atlas: '/spine/coin/coin-pma.atlas',
			},
		},
	} as const;

	const spineProps = {
		width: 250,
		x: 200,
		y: 200,
		zIndex: 1,
		anchor: { x: 0, y: 0 },
	};
</script>

<Story name="Preview">
	{#snippet children(args)}
		{@const props = {
			...args,
			trackIndex: args.trackIndex ?? 0,
			animationName: args.animationName ?? '',
		}}
		<StoryPixiApp {assets}>
			<SpineProvider key="coin" {...spineProps}>
				<SpineTrack {...props} />
			</SpineProvider>
		</StoryPixiApp>
	{/snippet}
</Story>
