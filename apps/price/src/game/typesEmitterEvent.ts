import type { BoardEmitterEvent } from '../components/Board.svelte';
import type { BoardFrameEmitterEvent } from '../components/BoardFrame.svelte';
import type { FreeSpinIntroEmitterEvent } from '../components/FreeSpinIntro.svelte';
import type { FreeSpinCounterEmitterEvent } from '../components/FreeSpinCounter.svelte';
import type { FreeSpinOutroEmitterEvent } from '../components/FreeSpinOutro.svelte';
import type { WinEmitterEvent } from '../components/Win.svelte';
import type { SoundEmitterEvent } from '../components/Sound.svelte';
import type { TransitionEmitterEvent } from '../components/Transition.svelte';
import type { ExpandingWildsEmitterEvent } from '../components/ExpandingWilds.svelte';
import type { StickyBoardEmitterEvent } from '../components/StickyBoard.svelte';

export type GameEmitterEvent =
	| BoardEmitterEvent
	| BoardFrameEmitterEvent
	| WinEmitterEvent
	| FreeSpinIntroEmitterEvent
	| FreeSpinCounterEmitterEvent
	| FreeSpinOutroEmitterEvent
	| SoundEmitterEvent
	| TransitionEmitterEvent
	| ExpandingWildsEmitterEvent
	| StickyBoardEmitterEvent;
