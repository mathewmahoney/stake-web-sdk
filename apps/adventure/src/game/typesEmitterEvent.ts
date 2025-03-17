import type { SoundEmitterEvent } from '../components/Sound.svelte';
import type { ChestEmitterEvent } from '../components/Chest.svelte';
import type { WinEmitterEvent } from '../components/Win.svelte';

export type GameEmitterEvent = SoundEmitterEvent | ChestEmitterEvent | WinEmitterEvent;
