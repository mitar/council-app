Package.describe({
  name: 'jobs',
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
    'peerlibrary:assert@0.2.5',
    'alanning:roles@1.2.15',
    'peerlibrary:classy-job@0.6.1'
  ]);

  // Internal dependencies.
  api.use([
  ]);

  // Dependencies for jobs themselves, can be unordered.
  api.use([
    'voting',
    'core'
  ], {unordered: true});

  api.export('ComputeTallyJob');

  api.addFiles([
    'tally.coffee'
  ], 'server');
});
