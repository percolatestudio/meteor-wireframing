Package.describe({
  summary: "Wireframing tools",
  version: "0.2.0",
  name: "percolate:wireframing",
  git: "https://github.com/percolatestudio/meteor-wireframing.git"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.3.1');

  api.use(['templating'], 'client');

  api.add_files(['placeholder.html', 'placeholder.js'], 'client');
});
