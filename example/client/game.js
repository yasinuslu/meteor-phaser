Game = function( /* same as Phaser.Game */ ) {
  Phaser.Game.apply(this, arguments);
};

Game.prototype = Object.create(Phaser.Game.prototype);
Game.prototype.constructor = Game;

// export game to global, we're inspecting
game = new Game();

game.state.add('mainState', MainState);

game.state.start('mainState');