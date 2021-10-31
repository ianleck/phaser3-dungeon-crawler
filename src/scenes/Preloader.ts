import Phaser from 'phaser';
import {
  dungeon_01,
  dungeon_tiles,
  empty_heart,
  faune,
  faune_png,
  full_heart,
  knife,
  lizard,
  lizard_png,
  treasure,
  treasure_png,
} from '../constants';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader');
  }

  preload() {
    this.load.image('tiles', dungeon_tiles);
    this.load.tilemapTiledJSON('dungeon', dungeon_01);

    this.load.atlas('faune', faune_png, faune);
    this.load.atlas('lizard', lizard_png, lizard);
    this.load.atlas('treasure', treasure_png, treasure);

    this.load.image('ui-heart-empty', empty_heart);
    this.load.image('ui-heart-full', full_heart);
    this.load.image('knife', knife);
  }

  create() {
    this.scene.start('game');
  }
}
