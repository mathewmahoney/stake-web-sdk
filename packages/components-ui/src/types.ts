export type UiEmitterEvent =
	| { type: 'hotKeySpace' }
	| { type: 'hotKeyEscape' }
	| { type: 'stopButtonClick' }
	| { type: 'stopButtonEnable' }
	| { type: 'uiShow' }
	| { type: 'uiHide' }
	// sound
	| { type: 'soundBetMode'; betModeKey: string }
	| { type: 'soundButtonGeneral' }
	| { type: 'soundButtonBet' }
	// bet services
	| { type: 'forceResult' }
	| { type: 'resumeBet' }
	| { type: 'autoBet' }
	| { type: 'bet' };
