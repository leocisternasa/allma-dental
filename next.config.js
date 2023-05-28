/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Otras configuraciones que tengas aquí
};

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Agrega aquí las configuraciones personalizadas de Webpack
      config.module.rules.push({
        test: /\.(woff2?|ttf|eot|svg|png|jpg|gif|mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      });

      return config;
    },
    ...nextConfig,
  };
};
