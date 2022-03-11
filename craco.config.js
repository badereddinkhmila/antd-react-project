const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#834bff',
              '@layout-body-background': '#F5F5F5',
              '@layout-header-background': '#FFFFFF',
              '@layout-footer-background': '#FFFFFF'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
