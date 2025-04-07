import { setContext, getContext } from 'svelte';

import { createLayout } from './createLayout.svelte';

type LayoutContext = ReturnType<typeof createLayout>;

const LAYOUT_NS = '@@layout';
export function setContextLayout(value: LayoutContext) {
	setContext(LAYOUT_NS, value);
}
export function getContextLayout() {
	return getContext(LAYOUT_NS) as LayoutContext;
}
