import { setEventEmitterContext, getEventEmitterContext } from 'utils-event-emitter';
import { setXstateContext, getXstateContext } from 'utils-xstate';
import { setLayoutContext, getLayoutContext } from 'utils-layout';
import { setAppContext, getAppContext } from 'pixi-svelte';

import { eventEmitter, type EmitterEvent } from './eventEmitter';
import { stateXstate, stateXstateDerived } from './stateXstate';
import { stateLayout, stateLayoutDerived } from './stateLayout';
import { stateApp } from './stateApp';

import { stateGame, stateGameDerived } from './stateGame.svelte';
import { i18nDerived } from '../i18n/i18nDerived';

export const setContext = () => {
	setEventEmitterContext<EmitterEvent>({ eventEmitter });
	setXstateContext({ stateXstate, stateXstateDerived });
	setLayoutContext({ stateLayout, stateLayoutDerived });
	setAppContext({ stateApp });
};

export const getContext = () => ({
	...getEventEmitterContext<EmitterEvent>(),
	...getLayoutContext(),
	...getXstateContext(),
	...getAppContext(),
	stateGame,
	stateGameDerived,
	i18nDerived,
});
