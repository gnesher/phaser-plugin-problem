/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @license      Digitsensitive
 */

export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("logo", "./src/boilerplate/assets/phaser.png");
  }

  create(): void {
    // @ts-ignore
    console.log(this.plugins.get('rexVirtualJoyStick'));
    // @ts-ignore 
    console.log(this.plugins.get('rexVirtualJoyStick').add());
    this.phaserSprite = this.add.sprite(400, 300, "logo");
  }
}
