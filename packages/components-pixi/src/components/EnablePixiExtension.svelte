<script lang="ts">
	import { getAppContext } from 'pixi-svelte';

	const context = getAppContext();

	// @ts-ignore
	globalThis.__PIXI_APP__ = context.stateApp.pixiApplication;
</script>
