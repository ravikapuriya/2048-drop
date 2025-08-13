export const ASSET_KEYS = Object.freeze({
    // Image assets
    BACKGROUND: 'BACKGROUND',

    // Audio assets
    BACKGROUND_MUSIC: 'BACKGROUND_MUSIC',
    SFX_BTN_CLICK: 'SFX_BTN_CLICK',

    // Font asset
    GAME_FONT: 'GAME_FONT',
});

export const IMAGE_ASSETS = [
    {
        assetKey: ASSET_KEYS.BACKGROUND,
        path: 'assets/images/background.png'
    },
];

export const AUDIO_ASSETS = [
    {
        assetKey: ASSET_KEYS.SFX_BTN_CLICK,
        path: 'assets/sounds/sfx-click.mp3',
    },
];

export const FONT_ASSETS = [
    {
        assetKey: ASSET_KEYS.GAME_FONT,
        path: 'assets/fonts/gameFont.ttf',
    },
];
