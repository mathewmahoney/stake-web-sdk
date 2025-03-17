import { setContext, getContext } from 'svelte';

import type { createXstate } from './createXstateUtils.svelte';

export type XstateContext = ReturnType<typeof createXstate>;

const XSTATE_NS = '@@xstate';
export function setXstateContext(value: XstateContext) {
	setContext(XSTATE_NS, value);
}
export function getXstateContext() {
	return getContext(XSTATE_NS) as XstateContext;
}
