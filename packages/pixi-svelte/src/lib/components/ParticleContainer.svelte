<script lang="ts" module>
	import * as PIXI from 'pixi.js';
	import type { Snippet } from 'svelte';

	import type { OverwriteCursor } from '../types';

	export type Props = OverwriteCursor<PIXI.ParticleContainerOptions> & {
		children: Snippet;
	};
</script>

<script lang="ts">
	import { propsSyncEffect } from '../utils.svelte';
	import { getParentContext, setParticleParentContext } from '../context.svelte';

	const props: Props = $props();
	const parentContext = getParentContext();
	const particleContainer = new PIXI.ParticleContainer();

	propsSyncEffect({ props, target: particleContainer, ignore: ['children'] });
	parentContext.addToParent(particleContainer);
	setParticleParentContext(particleContainer);
</script>

{@render props.children()}
