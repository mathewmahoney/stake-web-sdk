import { getEventEmitterContext } from 'utils-event-emitter';
import { getXstateContext } from 'utils-xstate';
import { getLayoutContext } from 'utils-layout';
import { getAppContext } from 'pixi-svelte';

import type { UiEmitterEvent } from './types';

export const getContext = () => ({
	...getEventEmitterContext<UiEmitterEvent>(),
	...getXstateContext(),
	...getLayoutContext(),
	...getAppContext(),
});
