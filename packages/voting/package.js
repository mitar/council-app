Package.describe({
  name: 'voting',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.6.0.1');

  // Core dependencies.
  api.use([
    'coffeescript'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:assert@0.2.5'
  ]);

  // Internal dependencies.
  api.use([
    'underscore-extra'
  ]);

  api.export('VotingEngine');

  api.addFiles([
    'lib.coffee'
  ]);

  api.addFiles([
    'engine.coffee'
  ], 'server');
});

Package.onTest(function (api) {
  api.versionsFrom('1.6.0.1');

  // Core dependencies.
  api.use([
    'coffeescript'
  ]);

  // Internal dependencies.
  api.use([
    'voting'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:classy-test@0.2.26'
  ]);

  api.addFiles([
    'tests.coffee'
   ], 'server');
});
