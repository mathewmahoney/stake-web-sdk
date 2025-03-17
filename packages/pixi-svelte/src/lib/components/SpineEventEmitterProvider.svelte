<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type Props = { children: Snippet };
</script>

<script lang="ts">
	import * as PIXI from 'pixi.js';

	import { getSpineContext, setSpineEventEmitterContext } from '../context.svelte';

	const props: Props = $props();
	const spine = getSpineContext();
	const spineEventEmitter = new PIXI.EventEmitter();

	spine.beforeUpdateWorldTransforms = () => spineEventEmitter.emit('beforeUpdateWorldTransforms');
	spine.afterUpdateWorldTransforms = () => spineEventEmitter.emit('afterUpdateWorldTransforms');

	setSpineEventEmitterContext(spineEventEmitter);
</script>

{@render props.children()}
