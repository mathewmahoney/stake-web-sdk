<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setBoardContext } from '../context';

	type Props = {
		animate: boolean;
		children: Snippet;
	};

	const props: Props = $props();

	setBoardContext({ animate: props.animate });
</script>

{@render props.children()}
