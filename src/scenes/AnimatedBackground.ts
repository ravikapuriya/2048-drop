import { ASSET_KEYS } from "../data/assets";
import { GameOptions, SCENE_KEYS } from "../data/GameOptions";

// AnimatedBackground class extends Phaser.Scene class
export default class AnimatedBackground extends Phaser.Scene {

    constructor() {
        super({ key: SCENE_KEYS.ANIMATED_BACKGROUND });
    }

    background: Phaser.GameObjects.TileSprite; // tile sprite to be used as background

    // method to be executed when the scene is created
    create(): void {

        // place a big tilesprite
        this.background = this.add.tileSprite(0, 0, this.game.config.width as number, this.game.config.height as number, ASSET_KEYS.BACKGROUND);
        this.background.setOrigin(0);

        // add a tween counter to scroll background
        this.tweens.addCounter({
            from: 0,            // initial value
            to: 256,          // final value
            duration: 15000,        // tween duration, in milliseconds
            onUpdate: tween => {    // callback function to be executed at each update

                // move tile position to fake a scrolling movement
                this.background.setTilePosition(tween.getValue(), -tween.getValue());
            },
            repeat: -1            // repeat the tween forever
        })

        // give the background a random tint color
        const tintColor: number = Phaser.Utils.Array.GetRandom(GameOptions.bgColors);
        const backgroundScene: AnimatedBackground = this.scene.get('AnimatedBackground') as AnimatedBackground;
        backgroundScene.tintBackground(tintColor);
    }

    // method to tint the background
    // color : color to be used to ting
    tintBackground(color: number): void {
        this.background.setTint(color);
    }
}
