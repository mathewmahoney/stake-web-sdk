import { setContext, getContext } from 'svelte';

import type { createXstate } from './createXstateUtils.svelte';

export type XstateContext = ReturnType<typeof createXstate>;

const XSTATE_NS = '@@xstate';
export function setContextXstate(value: XstateContext) {
	setContext(XSTATE_NS, value);
}
export function getContextXstate() {
	return getContext(XSTATE_NS) as XstateContext;
}
