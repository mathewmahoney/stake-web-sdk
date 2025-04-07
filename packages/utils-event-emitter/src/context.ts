import { setContext, getContext } from 'svelte';

import type { createEventEmitter, EmitterEventBase } from './createEventEmitter';

type EventEmitterContext<TEmitterEvent extends EmitterEventBase> = ReturnType<
	typeof createEventEmitter<TEmitterEvent>
>;

const EVENT_EMITTER_NS = '@@eventEmitter';
export function setContextEventEmitter<TEmitterEvent extends EmitterEventBase>(
	value: EventEmitterContext<TEmitterEvent>,
) {
	setContext(EVENT_EMITTER_NS, value);
}
export function getContextEventEmitter<TEmitterEvent extends EmitterEventBase>() {
	return getContext(EVENT_EMITTER_NS) as EventEmitterContext<TEmitterEvent>;
}
