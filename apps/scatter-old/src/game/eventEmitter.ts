import { createEventEmitter } from 'utils-event-emitter';
import type { UiEmitterEvent } from 'components-ui';
import type { HotKeyEmitterEvent } from 'components-shared';

import type { GameEmitterEvent } from './typesEmitterEvent';

export type EmitterEvent = UiEmitterEvent | HotKeyEmitterEvent | GameEmitterEvent;

export const { eventEmitter } = createEventEmitter<EmitterEvent>();
