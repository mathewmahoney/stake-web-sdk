<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import * as SPINE_PIXI from '@esotericsoftware/spine-pixi-v8';

	import type { OverwriteCursor } from '../types';

	export type Props = OverwriteCursor<Omit<SPINE_PIXI.SpineOptions, 'children'>> & {
		spineData: SPINE_PIXI.SkeletonData;
		children: Snippet;
	};
</script>

<script lang="ts">
	import { propsSyncEffect } from '../utils.svelte';
	import { setSpineContext, getParentContext } from '../context.svelte';

	const props: Props = $props();
	const parentContext = getParentContext();
	const spine = new SPINE_PIXI.Spine(props.spineData);

	propsSyncEffect({ props, target: spine, ignore: ['children'] });

	parentContext.addToParent(spine);
	setSpineContext(spine);
</script>

{@render props.children()}
