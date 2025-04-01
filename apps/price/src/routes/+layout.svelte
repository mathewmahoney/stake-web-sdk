<script lang="ts">
	import { type Snippet } from 'svelte';

	import { Authenticate, LoaderCarrot, LoaderExample, LoadI18n } from 'components-shared';
	import messagesMap from '../i18n/messagesMap';

	type Props = { children: Snippet };

	const props: Props = $props();

	let showYourLoader = $state(false);
</script>

<Authenticate>
	<LoadI18n {messagesMap}>
		{@render props.children()}
	</LoadI18n>
</Authenticate>

<LoaderCarrot oncomplete={() => (showYourLoader = true)} />

{#if showYourLoader}
	<LoaderExample src={'/loader.gif'} />
	<!-- '/loader.gif' is served from static folder of sveltekit -->
	<!-- File location: apps/scatter/static/loader.gif -->
{/if}
