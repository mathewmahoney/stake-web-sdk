<script lang="ts">
	import type { Snippet } from 'svelte';

	import type { ButtonIcon, ButtonKeys } from '../types';

	type Props = {
		icon: ButtonIcon;
		children: Snippet<[ButtonKeys]>;
	};

	const props: Props = $props();

	const KEYS_MAP = {
		decrease: {
			disabledKey: 'decrease_disabled',
			hoverKey: 'decrease_hover',
			pressKey: 'decrease_default',
			defaultKey: 'decrease_default',
		},
		increase: {
			disabledKey: 'increase_disabled',
			hoverKey: 'increase_hover',
			pressKey: 'increase_default',
			defaultKey: 'increase_default',
		},
		menu: {
			hoverKey: 'menu_hover',
			pressKey: 'menu_default',
			defaultKey: 'menu_default',
		},
		turbo: {
			hoverKey: 'turbo_hover',
			pressKey: 'turbo_default',
			activeKey: 'turbo_active',
			activeHoverKey: 'turbo_active_hover',
			defaultKey: 'turbo_default',
		},
		autoSpin: {
			disabledKey: 'autospin_disabled',
			hoverKey: 'autospin_hover',
			pressKey: 'autospin_default',
			activeKey: 'autospin_active',
			activeHoverKey: 'autospin_active_hover',
			defaultKey: 'autospin_default',
		},
		payTable: {
			hoverKey: 'paytable_hover',
			pressKey: 'paytable_default',
			defaultKey: 'paytable_default',
		},
		info: {
			hoverKey: 'info_hover',
			pressKey: 'info_default',
			defaultKey: 'info_default',
		},
		settings: {
			hoverKey: 'settings_hover',
			pressKey: 'settings_default',
			defaultKey: 'settings_default',
		},
		soundOn: {
			hoverKey: 'soundon_hover',
			pressKey: 'soundon_default',
			defaultKey: 'soundon_default',
		},
		soundOff: {
			hoverKey: 'soundoff_hover',
			pressKey: 'soundoff_default',
			defaultKey: 'soundoff_default',
		},
		menuExit: {
			hoverKey: 'menuexit_hover',
			pressKey: 'menuexit_default',
			defaultKey: 'menuexit_default',
		},
	} as const;
</script>

{@render props.children(KEYS_MAP[props.icon])}
