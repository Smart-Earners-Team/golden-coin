import type { GatsbyNode } from "gatsby";
import path from "path";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = async ({ plugins, actions }) => {
  actions.setWebpackConfig({
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    plugins: [
      plugins.provide({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    resolve: {
      fallback: {
        // assert: require.resolve('assert'),
        // crypto: require.resolve("crypto-browserify"),
        // http: require.resolve('stream-http'),
        // https: require.resolve('https-browserify'),
        // os: require.resolve('os-browserify/browser'),
        // stream: require.resolve("stream-browserify"),
        buffer: path.resolve("buffer"),
      },
    },
  });
};
