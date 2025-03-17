<script lang="ts">
	import type { Snippet } from 'svelte';

	import { createParentContext, getAppContext } from '../context.svelte';

	type Props = { children: Snippet };

	const props: Props = $props();
	const context = getAppContext();

	let parentContext = createParentContext(
		context.stateApp.pixiApplication?.stage ?? new PIXI.Container(),
	);
</script>

{#if parentContext.parent}
	{@render props.children()}
{/if}
