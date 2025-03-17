import type { BoardEmitterEvent } from '../components/Board.svelte';
import type { BoardFrameEmitterEvent } from '../components/BoardFrame.svelte';
import type { ClusterWinAmountsEmitterEvent } from '../components/ClusterWinAmounts.svelte';
import type { TumbleBoardEmitterEvent } from '../components/TumbleBoard.svelte';
import type { TumbleWinAmountEmitterEvent } from '../components/TumbleWinAmount.svelte';
import type { GlobalMultiplierEmitterEvent } from '../components/GlobalMultiplier.svelte';
import type { MultiplierBoardEmitterEvent } from '../components/MultiplierBoard.svelte';
import type { MultiplierTotalEmitterEvent } from '../components/MultiplierTotal.svelte';
import type { FreeSpinIntroEmitterEvent } from '../components/FreeSpinIntro.svelte';
import type { FreeSpinCounterEmitterEvent } from '../components/FreeSpinCounter.svelte';
import type { FreeSpinOutroEmitterEvent } from '../components/FreeSpinOutro.svelte';
import type { WinEmitterEvent } from '../components/Win.svelte';
import type { SoundEmitterEvent } from '../components/Sound.svelte';
import type { TransitionEmitterEvent } from '../components/Transition.svelte';

export type GameEmitterEvent =
	| BoardEmitterEvent
	| BoardFrameEmitterEvent
	| ClusterWinAmountsEmitterEvent
	| TumbleBoardEmitterEvent
	| TumbleWinAmountEmitterEvent
	| GlobalMultiplierEmitterEvent
	| MultiplierBoardEmitterEvent
	| MultiplierTotalEmitterEvent
	| WinEmitterEvent
	| FreeSpinIntroEmitterEvent
	| FreeSpinCounterEmitterEvent
	| FreeSpinOutroEmitterEvent
	| SoundEmitterEvent
	| TransitionEmitterEvent;
