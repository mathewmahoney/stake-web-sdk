<script lang="ts">
	import type { Snippet } from 'svelte';

	import './twist.scss';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();
</script>

{@render props.children()}
