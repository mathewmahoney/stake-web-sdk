import { setContext, getContext } from 'svelte';

import type { createEventEmitter, BaseEmitterEvent } from './createEventEmitter';

type EventEmitterContext<TEmitterEvent extends BaseEmitterEvent> = ReturnType<
	typeof createEventEmitter<TEmitterEvent>
>;

const EVENT_EMITTER_NS = '@@eventEmitter';
export function setEventEmitterContext<TEmitterEvent extends BaseEmitterEvent>(
	value: EventEmitterContext<TEmitterEvent>,
) {
	setContext(EVENT_EMITTER_NS, value);
}
export function getEventEmitterContext<TEmitterEvent extends BaseEmitterEvent>() {
	return getContext(EVENT_EMITTER_NS) as EventEmitterContext<TEmitterEvent>;
}
