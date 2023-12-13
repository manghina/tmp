const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts, ...restResolver },
    transformer,
    ...rest
  } = await getDefaultConfig(__dirname);

  return {
    ...rest,
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve("./customTransformer.js"),
    },
    resolver: {
      ...restResolver,
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
