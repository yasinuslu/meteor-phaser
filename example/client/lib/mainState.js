MainState = function() {
  Phaser.State.apply(this, arguments);
};

MainState.prototype = Object.create(Phaser.State);
MainState.prototype.constructor = MainState;

_.extend(MainState.prototype, {
  preload: function() {

  },

  create: function() {

  },

  update: function() {

  },

  render: function() {
    game.debug.text("Now that you have Phaser.js", 100, 100);
    game.debug.text("working with meteor go do awesome things.", 100, 120);
  }
});