<script lang="ts" module>
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'BookEvent',
	});
</script>

<script lang="ts">
	import {
		StoryGameTemplate,
		StoryLocale,
		type TemplateArgs,
		templateArgs,
	} from 'components-storybook';

	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';
	import { playBookEvent, playBookEvents } from '../game/utils';
	import * as mock from './mock';

	setTemplate(template);
	setContext();
</script>

{#snippet template(args: TemplateArgs<any>)}
	<StoryGameTemplate
		skipLoadingScreen={args.skipLoadingScreen}
		action={async () => {
			await args.action?.(args.data);
		}}
	>
		<StoryLocale lang="en">
			<Game />
		</StoryLocale>
	</StoryGameTemplate>
{/snippet}

<Story
	name="reveal (normal)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_base.reveal,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="reveal (anticipation)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: { ...mock.event_config_base.reveal, anticipation: [0, 0, 1, 1, 1, 1] },
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="reveal (5 scatters)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.edge_case_event.reveal_six_scatters,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="reveal (fullscreen scatter)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.edge_case_event.reveal_full_scatter,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="reveal (fullscreen wild)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.edge_case_event.reveal_full_wild,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="reveal (fullscreen multiplier)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.edge_case_event.reveal_full_multiplier,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="animateSymbols"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_base.animateSymbols,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="animateSymbols (reason: trigger_freeSpin)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: { ...mock.event_config_base.animateSymbols, reason: 'trigger_freeSpin' },
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="clusterWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_base.clusterWin,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="tumbleBoard (dev)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_base.tumbleBoardTest,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="tumbleBoard (normal)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_base.tumbleBoard,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="tumbleBoard (anticipation)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: { ...mock.event_config_base.tumbleBoard, anticipation: true },
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="setTumbleWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_base.setTumbleWin,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="updateGlobalMult"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_bonus.updateGlobalMult,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="updateGlobalMult (reset)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: [
			{
				index: 0,
				type: 'updateGlobalMult' as const,
				globalMult: 2,
			},
			{
				index: 1,
				type: 'updateGlobalMult' as const,
				globalMult: 3,
			},
			{
				index: 2,
				type: 'updateGlobalMult' as const,
				globalMult: 4,
			},
			{
				index: 3,
				type: 'updateGlobalMult' as const,
				globalMult: 1,
			},
		],
		action: async (data) => await playBookEvents(data),
	})}
/>

<Story
	name="multiplierSplashScreen"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_bonus.multiplierSplashScreen,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="freeSpinTrigger (normal)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_bonus.freeSpinTrigger,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="freeSpinTrigger (extraSpins)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.edge_case_event.freeSpinTriggerWithExtraSpins,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="updateFreeSpin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_bonus.updateFreeSpin,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="freeSpinEnd"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_bonus.freeSpinEnd,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="cumulativeTumble (small win)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_bonus.cumulativeTumbleSmall,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="cumulativeTumble (big win)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.event_config_bonus.cumulativeTumbleBig,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="winCap"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.book_crash_after_performance_fix.events.find(
			(bookEvent) => bookEvent.type === 'winCap',
		),
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="events: to test multiplierSplashScreen"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.events_combinations.multiplierSplashScreen,
		action: async (data) => await playBookEvents(data),
	})}
/>
