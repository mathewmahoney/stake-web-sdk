import { setContext, getContext } from 'svelte';

import { createLayout } from './createLayout.svelte';

type LayoutContext = ReturnType<typeof createLayout>;

const LAYOUT_NS = '@@layout';
export function setLayoutContext(value: LayoutContext) {
	setContext(LAYOUT_NS, value);
}
export function getLayoutContext() {
	return getContext(LAYOUT_NS) as LayoutContext;
}
