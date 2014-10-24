Package.describe({
  name: 'yasinuslu:phaser',
  summary: 'Phaser-IO repackaged for meteor',
  version: '1.0.0',
  git: 'https://github.com/yasinuslu/meteor-phaser.git'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('lib/phaser.js', 'client');

  // since Phaser and PIXI vars aren't package spec variables we can't export it
  // but phaser sets window.Phaser and window.PIXI anyway
  // it might cause security concerns but MDG must have thought this deeply so we're leaving it there
  // api.export('Phaser', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yasinuslu:phaser');
  api.addFiles('tests/phaser.js');
});