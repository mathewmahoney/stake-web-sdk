<script lang="ts">
	import type { Snippet } from "svelte";

	import { createEventEmitter, setEventEmitterContext } from "utils-event-emitter";

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();

	const context = createEventEmitter<any>();

	setEventEmitterContext(context);
</script>

{@render props.children()}
