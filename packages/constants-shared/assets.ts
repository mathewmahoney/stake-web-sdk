const VERSION = '3.0';
const BASE_URL = `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/shared-asset-package/ui-slots/${VERSION}`;
const logo = { type: 'sprite', src: `${BASE_URL}/logo.webp` } as const;

// buttons
const autospin_active = { type: 'sprite', src: `${BASE_URL}/autospin_active.webp` } as const;
const increase_click = { type: 'sprite', src: `${BASE_URL}/increase_click.webp` } as const;
const lobby_click = { type: 'sprite', src: `${BASE_URL}/lobby_click.webp` } as const;
const menuexit_default = { type: 'sprite', src: `${BASE_URL}/menuexit_default.webp` } as const;
const soundon_hover = { type: 'sprite', src: `${BASE_URL}/soundon_hover.webp` } as const;
const autospin_click = { type: 'sprite', src: `${BASE_URL}/autospin_click.webp` } as const;
const increase_default = { type: 'sprite', src: `${BASE_URL}/increase_default.webp` } as const;
const lobby_default = { type: 'sprite', src: `${BASE_URL}/lobby_default.webp` } as const;
const settings_hover = { type: 'sprite', src: `${BASE_URL}/settings_hover.webp` } as const;
const spin_default = { type: 'sprite', src: `${BASE_URL}/spin_default.webp` } as const;
const spin_hover = { type: 'sprite', src: `${BASE_URL}/spin_hover.webp` } as const;
const stop_hover = { type: 'sprite', src: `${BASE_URL}/stop_hover.webp` } as const;
const autospin_default = { type: 'sprite', src: `${BASE_URL}/autospin_default.webp` } as const;
const increase_disabled = { type: 'sprite', src: `${BASE_URL}/increase_disabled.webp` } as const;
const menuexit_hover = { type: 'sprite', src: `${BASE_URL}/menuexit_hover.webp` } as const;
const spin_disabled = { type: 'sprite', src: `${BASE_URL}/spin_disabled.webp` } as const;
const autospin_disabled = { type: 'sprite', src: `${BASE_URL}/autospin_disabled.webp` } as const;
const increase_hover = { type: 'sprite', src: `${BASE_URL}/increase_hover.webp` } as const;
const lobby_hover = { type: 'sprite', src: `${BASE_URL}/lobby_hover.webp` } as const;
const soundoff_click = { type: 'sprite', src: `${BASE_URL}/soundoff_click.webp` } as const;
const stop_default = { type: 'sprite', src: `${BASE_URL}/stop_default.webp` } as const;
const autospin_hover = { type: 'sprite', src: `${BASE_URL}/autospin_hover.webp` } as const;
const paytable_click = { type: 'sprite', src: `${BASE_URL}/paytable_click.webp` } as const;
const soundoff_default = { type: 'sprite', src: `${BASE_URL}/soundoff_default.webp` } as const;
const stop_disabled = { type: 'sprite', src: `${BASE_URL}/stop_disabled.webp` } as const;
const menu_click = { type: 'sprite', src: `${BASE_URL}/menu_click.webp` } as const;
const paytable_default = { type: 'sprite', src: `${BASE_URL}/paytable_default.webp` } as const;
const turbo_active = { type: 'sprite', src: `${BASE_URL}/turbo_active.webp` } as const;
const decrease_click = { type: 'sprite', src: `${BASE_URL}/decrease_click.webp` } as const;
const info_click = { type: 'sprite', src: `${BASE_URL}/info_click.webp` } as const;
const menu_default = { type: 'sprite', src: `${BASE_URL}/menu_default.webp` } as const;
const soundoff_hover = { type: 'sprite', src: `${BASE_URL}/soundoff_hover.webp` } as const;
const turbo_click = { type: 'sprite', src: `${BASE_URL}/turbo_click.webp` } as const;
const decrease_default = { type: 'sprite', src: `${BASE_URL}/decrease_default.webp` } as const;
const info_default = { type: 'sprite', src: `${BASE_URL}/info_default.webp` } as const;
const paytable_hover = { type: 'sprite', src: `${BASE_URL}/paytable_hover.webp` } as const;
const turbo_default = { type: 'sprite', src: `${BASE_URL}/turbo_default.webp` } as const;
const decrease_disabled = { type: 'sprite', src: `${BASE_URL}/decrease_disabled.webp` } as const;
const menu_hover = { type: 'sprite', src: `${BASE_URL}/menu_hover.webp` } as const;
const soundon_click = { type: 'sprite', src: `${BASE_URL}/soundon_click.webp` } as const;
const decrease_hover = { type: 'sprite', src: `${BASE_URL}/decrease_hover.webp` } as const;
const info_hover = { type: 'sprite', src: `${BASE_URL}/info_hover.webp` } as const;
const settings_click = { type: 'sprite', src: `${BASE_URL}/settings_click.webp` } as const;
const soundon_default = { type: 'sprite', src: `${BASE_URL}/soundon_default.webp` } as const;
const turbo_hover = { type: 'sprite', src: `${BASE_URL}/turbo_hover.webp` } as const;
const menuexit_click = { type: 'sprite', src: `${BASE_URL}/menuexit_click.webp` } as const;
const settings_default = { type: 'sprite', src: `${BASE_URL}/settings_default.webp` } as const;
const autospin_active_hover = {
	type: 'sprite',
	src: `${BASE_URL}/autospin_active_hover.webp`,
} as const;
const turbo_active_hover = { type: 'sprite', src: `${BASE_URL}/turbo_active_hover.webp` } as const;
// base
const bet_amount_frame_active = {
	type: 'sprite',
	src: `${BASE_URL}/bet_amount_frame_active.webp`,
} as const;
const bet_amount_frame_default = {
	type: 'sprite',
	src: `${BASE_URL}/bet_amount_frame_default.webp`,
} as const;
const bet_amount_frame_disabled = {
	type: 'sprite',
	src: `${BASE_URL}/bet_amount_frame_disabled.webp`,
} as const;
const base_bet_base = { type: 'sprite', src: `${BASE_URL}/base_bet_base.webp` } as const;
const base_desktop_spin = { type: 'sprite', src: `${BASE_URL}/base_desktop_spin.webp` } as const;
const base_sidemenu = { type: 'sprite', src: `${BASE_URL}/base_sidemenu.webp` } as const;
const base_bet_fill = { type: 'sprite', src: `${BASE_URL}/base_bet_fill.webp` } as const;
const base_mobile_balance = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_balance.webp`,
} as const;
const base_mobile_balance_gradient = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_balance_gradient.webp`,
} as const;
const base_mobile_toggle_hide = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_toggle_hide.webp`,
} as const;
const base_mobile_toggle_reveal = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_toggle_reveal.webp`,
} as const;

const bet_frame_default_L = {
	type: 'sprite',
	src: `${BASE_URL}/bet_frame_default_L.webp`,
} as const;
const bet_frame_default_M = {
	type: 'sprite',
	src: `${BASE_URL}/bet_frame_default_M.webp`,
} as const;
const bet_frame_default_R = {
	type: 'sprite',
	src: `${BASE_URL}/bet_frame_default_R.webp`,
} as const;
const bet_frame_hover_L = { type: 'sprite', src: `${BASE_URL}/bet_frame_hover_L.webp` } as const;
const bet_frame_hover_M = { type: 'sprite', src: `${BASE_URL}/bet_frame_hover_M.webp` } as const;
const bet_frame_hover_R = { type: 'sprite', src: `${BASE_URL}/bet_frame_hover_R.webp` } as const;
const bet_frame_disabled_L = {
	type: 'sprite',
	src: `${BASE_URL}/bet_frame_disabled_L.webp`,
} as const;
const bet_frame_disabled_M = {
	type: 'sprite',
	src: `${BASE_URL}/bet_frame_disabled_M.webp`,
} as const;
const bet_frame_disabled_R = {
	type: 'sprite',
	src: `${BASE_URL}/bet_frame_disabled_R.webp`,
} as const;

const base_ticker = { type: 'sprite', src: `${BASE_URL}/base_ticker.webp` } as const;
const base_ticker_2 = { type: 'sprite', src: `${BASE_URL}/base_ticker_2.webp` } as const;
const base_betbuttons = { type: 'sprite', src: `${BASE_URL}/base_betbuttons.webp` } as const;
const base_mobile_bet = { type: 'sprite', src: `${BASE_URL}/base_mobile_bet.webp` } as const;
const base_mobile_betmenu = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_betmenu.webp`,
} as const;
const base_landscape_betmenu = {
	type: 'sprite',
	src: `${BASE_URL}/base_landscape_betmenu.webp`,
} as const;
const desktop_gradient = { type: 'sprite', src: `${BASE_URL}/desktop_gradient.webp` } as const;
const base_mobile_buttons = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_buttons.webp`,
} as const;
const base_mobile_buttons_long = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_buttons_long.webp`,
} as const;
const popup_sidemenu = { type: 'sprite', src: `${BASE_URL}/popup_sidemenu.webp` } as const;
const base_desktop_balanceresponsive = {
	type: 'sprite',
	src: `${BASE_URL}/base_desktop_balanceresponsive.webp`,
} as const;
const base_mobile_spin = { type: 'sprite', src: `${BASE_URL}/base_mobile_spin.webp` } as const;
const popup_sidemenu_responsive = {
	type: 'sprite',
	src: `${BASE_URL}/popup_sidemenu_responsive.webp`,
} as const;
const base_mobile_fscounter = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_fscounter.webp`,
} as const;
const base_mobile_drawer_reveal = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_drawer_reveal.webp`,
} as const;
const base_mobile_drawer_hide = {
	type: 'sprite',
	src: `${BASE_URL}/base_mobile_drawer_hide.webp`,
} as const;
const base_mobile_drawer = { type: 'sprite', src: `${BASE_URL}/base_mobile_drawer.webp` } as const;
//mask
const circle_mask_black = { type: 'sprite', src: `${BASE_URL}/circle_mask_black.png` } as const;

const betButton = {
	type: 'spine',
	src: {
		skeleton: `${BASE_URL}/betButton/bet-button.json`,
		atlas: `${BASE_URL}/betButton/bet-button.atlas`,
		scale: 2,
	},
} as const;

const bonusButton = {
	type: 'spine',
	src: {
		atlas:
			'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/spines/bonusButton/2.0/buy_button.atlas',
		skeleton:
			'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game/spines/bonusButton/2.0/buy_button.json',
	},
} as const;

const pressToContinueBackground = {
	type: 'sprite',
	src: 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/components-pixi-package/pressToContinueBackground/pressToContinueBackground.png',
} as const;

//new version background 2025
const background_balance_frame = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_balance_frame.webp`,
} as const;
const background_bet_amount_frame = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_bet_amount_frame.webp`,
} as const;
const background_bet_frame = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_bet_frame.webp`,
} as const;
const background_menu_frame = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_menu_frame.webp`,
} as const;

//portrait
const background_bet_amount_frame_portrait = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_bet_amount_frame_portrait.webp`,
} as const;
const background_bet_frame_portrait = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_bet_frame_portrait.webp`,
} as const;
const background_increase_frame_portrait = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_increase_frame_portrait.webp`,
} as const;
const background_ticker_frame_portrait = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_ticker_frame_portrait.webp`,
} as const;
const background_ui_gradient_portrait = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_ui_gradient_portrait.webp`,
} as const;

const background_bet_frame_landscape = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_bet_frame_landscape.webp`,
} as const;
const background_bet_amount_frame_landscape = {
	type: 'sprite',
	src: `${BASE_URL}/background/background_bet_amount_frame_landscape.webp`,
} as const;

const sharedAssetsPixi = {
	logo,
	// buttons
	autospin_active,
	increase_click,
	lobby_click,
	menuexit_default,
	soundon_hover,
	autospin_click,
	increase_default,
	lobby_default,
	settings_hover,
	spin_default,
	spin_hover,
	stop_hover,
	autospin_default,
	increase_disabled,
	menuexit_hover,
	spin_disabled,
	autospin_disabled,
	increase_hover,
	lobby_hover,
	soundoff_click,
	stop_default,
	autospin_hover,
	paytable_click,
	soundoff_default,
	stop_disabled,
	menu_click,
	paytable_default,
	turbo_active,
	decrease_click,
	info_click,
	menu_default,
	soundoff_hover,
	turbo_click,
	decrease_default,
	info_default,
	paytable_hover,
	turbo_default,
	decrease_disabled,
	menu_hover,
	soundon_click,
	decrease_hover,
	info_hover,
	settings_click,
	soundon_default,
	turbo_hover,
	menuexit_click,
	settings_default,
	// base
	bet_amount_frame_active,
	bet_amount_frame_default,
	bet_amount_frame_disabled,
	base_bet_base,
	base_desktop_spin,
	base_sidemenu,
	base_bet_fill,
	base_mobile_balance,
	base_mobile_balance_gradient,
	base_mobile_toggle_hide,
	base_mobile_toggle_reveal,
	bet_frame_default_L,
	bet_frame_default_M,
	bet_frame_default_R,
	bet_frame_hover_L,
	bet_frame_hover_M,
	bet_frame_hover_R,
	bet_frame_disabled_L,
	bet_frame_disabled_M,
	bet_frame_disabled_R,
	base_ticker,
	base_ticker_2,
	base_betbuttons,
	base_mobile_bet,
	base_mobile_betmenu,
	base_landscape_betmenu,
	desktop_gradient,
	base_mobile_buttons,
	base_mobile_buttons_long,
	popup_sidemenu,
	base_desktop_balanceresponsive,
	base_mobile_spin,
	popup_sidemenu_responsive,
	base_mobile_fscounter,
	base_mobile_drawer_reveal,
	base_mobile_drawer_hide,
	base_mobile_drawer,
	//mask
	circle_mask_black,
	//
	betButton,
	bonusButton,
	pressToContinueBackground,
	//background frame (2025) design
	background_balance_frame,
	background_bet_amount_frame,
	background_bet_frame,
	background_menu_frame,
	//
	background_bet_amount_frame_portrait,
	background_bet_frame_portrait,
	background_increase_frame_portrait,
	background_ticker_frame_portrait,
	background_ui_gradient_portrait,
	//
	background_bet_frame_landscape,
	background_bet_amount_frame_landscape,
	autospin_active_hover,
	turbo_active_hover,
} as const;

const BASE_URL_HTML =
	'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/shared-asset-package/ui-slots/2.0';

// popups
const button_decrease_default = `${BASE_URL_HTML}/button_decrease_default.webp` as const;
const button_decrease_disable = `${BASE_URL_HTML}/button_decrease_disable.webp` as const;
const button_decrease_hover = `${BASE_URL_HTML}/button_decrease_hover.webp` as const;
const button_increase_default = `${BASE_URL_HTML}/button_increase_default.webp` as const;
const button_increase_disable = `${BASE_URL_HTML}/button_increase_disable.webp` as const;
const button_increase_hover = `${BASE_URL_HTML}/button_increase_hover.webp` as const;

const circle_decrease_default = `${BASE_URL_HTML}/circle_decrease_default.webp` as const;
const circle_decrease_disabled = `${BASE_URL_HTML}/circle_decrease_disable.webp` as const;
const circle_decrease_hover = `${BASE_URL_HTML}/circle_decrease_hover.webp` as const;
const circle_decrease_click = `${BASE_URL_HTML}/circle_decrease_click.webp` as const;

const circle_increase_default = `${BASE_URL_HTML}/circle_increase_default.webp` as const;
const circle_increase_disabled = `${BASE_URL_HTML}/circle_increase_disable.webp` as const;
const circle_increase_hover = `${BASE_URL_HTML}/circle_increase_hover.webp` as const;
const circle_increase_click = `${BASE_URL_HTML}/circle_increase_click.webp` as const;

const buy_base_1 = `${BASE_URL_HTML}/buy_base_1.webp` as const;
const icon_exit = `${BASE_URL_HTML}/icon_exit.webp` as const;
const volumeOn = `${BASE_URL_HTML}/volumeOn.webp` as const;
const volumeOff = `${BASE_URL_HTML}/volumeOff.webp` as const;
const rtp_badge = `${BASE_URL_HTML}/rtp_badge.webp` as const;

const buybutton_active = `${BASE_URL_HTML}/buybutton_active.png` as const;
const buybutton_click = `${BASE_URL_HTML}/buybutton_click.webp` as const;
const buybutton_default = `${BASE_URL_HTML}/buybutton_default.webp` as const;
const buybutton_disabled = `${BASE_URL_HTML}/buybutton_disabled.webp` as const;
const buybutton_hover = `${BASE_URL_HTML}/buybutton_hover.webp` as const;

const sharedAssetsHtml = {
	button_decrease_default,
	button_decrease_disable,
	button_decrease_hover,
	button_increase_default,
	button_increase_disable,
	button_increase_hover,
	circle_decrease_default,
	circle_decrease_disabled,
	circle_decrease_hover,
	circle_decrease_click,
	circle_increase_default,
	circle_increase_disabled,
	circle_increase_hover,
	circle_increase_click,
	buy_base_1,
	icon_exit,
	volumeOn,
	volumeOff,
	rtp_badge,

	buybutton_active,
	buybutton_click,
	buybutton_default,
	buybutton_disabled,
	buybutton_hover,
};

export { sharedAssetsPixi, sharedAssetsHtml };

export type KeyOfSharedAssetsPixi = keyof typeof sharedAssetsPixi;
export type KeyOfSharedAssetsHtml = keyof typeof sharedAssetsHtml;
