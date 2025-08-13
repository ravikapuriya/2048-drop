import Phaser from "phaser";
import { GameOptions, SCENE_KEYS } from "../data/GameOptions";
import AnimatedBackground from "./AnimatedBackground";

export default class GameScene extends Phaser.Scene {
    protected gameOver: boolean;

    constructor() {
        super({
            key: SCENE_KEYS.GAME_SCENE
        });
        this.gameOver = false;
    }

    init() {
        // give the background a random tint color
        const tintColor: number = Phaser.Utils.Array.GetRandom(GameOptions.bgColors);
        const backgroundScene: AnimatedBackground = this.scene.get('AnimatedBackground') as AnimatedBackground;
        backgroundScene.tintBackground(tintColor);
    }


    create() {
        const { width, height } = this.game.scale;
        // Temp text UI
        this.add.text(width / 2, height / 2, "Game Scene", { fontFamily: "sans-serif", fontSize: "48px" }).setOrigin(0.5);
    }
}
