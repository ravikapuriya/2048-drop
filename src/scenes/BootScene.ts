import Phaser from 'phaser';
import { SCENE_KEYS } from '../data/GameOptions';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: SCENE_KEYS.BOOT_SCENE });
    }

    preload(): void {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
    }

    create(): void {
        this.scene.start(SCENE_KEYS.PRELOAD_SCENE);
    }
}
