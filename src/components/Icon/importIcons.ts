// @ts-ignore
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../../assets', true, /\.svg$/));
} catch (error) {
  console.log(error);
}
