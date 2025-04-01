import { setContext, getContext } from 'svelte';

import type { createEventEmitter, EmitterEventBase } from './createEventEmitter';

type EventEmitterContext<TEmitterEvent extends EmitterEventBase> = ReturnType<
	typeof createEventEmitter<TEmitterEvent>
>;

const EVENT_EMITTER_NS = '@@eventEmitter';
export function setEventEmitterContext<TEmitterEvent extends EmitterEventBase>(
	value: EventEmitterContext<TEmitterEvent>,
) {
	setContext(EVENT_EMITTER_NS, value);
}
export function getEventEmitterContext<TEmitterEvent extends EmitterEventBase>() {
	return getContext(EVENT_EMITTER_NS) as EventEmitterContext<TEmitterEvent>;
}
