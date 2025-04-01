<script lang="ts">
	import { sharedAssetsHtml as assets } from 'constants-shared/assets';

	type Icon = keyof typeof assets;

	type Props = {
		icon: Icon;
		hovered?: Icon;
		pressed?: Icon;
		size?: string;
		disabled?: boolean;
	};

	const { icon, hovered, pressed, size = '1rem', disabled = false }: Props = $props();

	const defaultUrl = $derived(assets[icon] as string);
	const hoveredUrl = $derived((hovered ? assets[hovered] : defaultUrl) as string);
	const pressedUrl = $derived((pressed ? assets[pressed] : defaultUrl) as string);

	let hoveredState = $state(false);
	let pressedState = $state(false);

	const src = $derived.by(() => {
		if (disabled) return defaultUrl;
		if (hoveredState) return hoveredUrl;
		if (pressedState) return pressedUrl;
		return defaultUrl;
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	style="width: {size}; height: {size};"
	on:mouseenter={() => (hoveredState = true)}
	on:mouseleave={() => (hoveredState = false)}
	on:mousedown={() => (pressedState = true)}
	on:mouseup={() => (pressedState = false)}
	on:pointerdown={() => (pressedState = true)}
	on:pointerup={() => (pressedState = false)}
>
	<img {src} style="width: 100%; object-fit: cover;" alt={icon} />
</div>
