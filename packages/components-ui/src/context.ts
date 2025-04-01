import { getEventEmitterContext } from 'utils-event-emitter';
import { getXstateContext } from 'utils-xstate';
import { getLayoutContext } from 'utils-layout';
import { getAppContext } from 'pixi-svelte';

import type { EmitterEventUi } from './types';

export const getContext = () => ({
	...getEventEmitterContext<EmitterEventUi>(),
	...getXstateContext(),
	...getLayoutContext(),
	...getAppContext(),
});
