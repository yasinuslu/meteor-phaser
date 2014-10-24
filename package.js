Package.describe({
  name: 'yasinuslu:phaser',
  summary: 'Phaser-IO repackaged for meteor',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('lib/phaser.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yasinuslu:phaser');
  api.addFiles('tests/phaser.js');
});