<script lang="ts" module>
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Bet',
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
	import { playBet, convertTorResumableBet } from '../game/utils';
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
	name="base bet (1 tumble)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.a_base_bet,
		action: async (data) => await playBet(data.round),
	})}
/>

<Story
	name="base bet (4 tumbles)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.a_good_base_bet,
		action: async (data) => await playBet(data.round),
	})}
/>

<Story
	name="base bet (big win)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.a_big_win_base_bet,
		action: async (data) => await playBet(data.round),
	})}
/>

<Story
	name="bonus bet"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.a_bonus_bet,
		action: async (data) => await playBet(data.round),
	})}
/>

<Story
	name="bonus bet (resume)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.a_bonus_bet,
		action: async (data) => await playBet(convertTorResumableBet(data.round)),
	})}
/>

<Story
	name="super spin bonus (resume)"
	args={templateArgs({
		skipLoadingScreen: true,
		data: mock.a_super_spin_bonus,
		action: async (data) => await playBet(data.round),
	})}
/>
