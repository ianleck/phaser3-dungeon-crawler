import Phaser from 'phaser';
import Game from './scenes/Game';
import GameUI from './scenes/GameUI';
import Preloader from './scenes/Preloader';

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 400,
  height: 250,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [Preloader, Game, GameUI],
  scale: {
    zoom: 2,
  },
});
