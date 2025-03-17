<script lang="ts">
	import { onMount } from 'svelte';

	import { EnablePixiExtension, FadeContainer } from 'components-pixi';
	import { EnableHotkey } from 'components-shared';
	import { MainContainer } from 'components-layout';

	import { App } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import EnableGameActor from './EnableGameActor.svelte';
	import EnableSound from './EnableSound.svelte';
	import Background from './Background.svelte';
	import Character from './Character.svelte';
	import Chest from './Chest.svelte';
	import Win from './Win.svelte';
	import Sound from './Sound.svelte';

	const context = getContext();

	onMount(() => (context.stateLayout.showLoadingScreen = true));
</script>

<App>
	<EnableSound />
	<EnableHotkey />
	<EnableGameActor />
	<EnablePixiExtension />

	<Background />

	<MainContainer debug>
		<Character
			onInitialised={() => {
				context.stateLayout.showLoadingScreen = false;
			}}
		/>
	</MainContainer>

	{#if !context.stateLayout.showLoadingScreen}
		<!--
				The reason why <Sound /> is rendered after clicking the loading screen:
				"Autoplay with sound is allowed if: The user has interacted with the domain (click, tap, etc.)."
				Ref: https://developer.chrome.com/blog/autoplay
			-->
		<Sound />

		<MainContainer>
			<FadeContainer show>
				<Chest />
			</FadeContainer>
		</MainContainer>

		<Win />
	{/if}
</App>
