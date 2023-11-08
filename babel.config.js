// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       // Required for expo-router
//       'expo-router/babel',
//     ],
//     env:{
//       production:{
//         plugins: ['react-native-papel/babel'],
//       },
//     },
//   };
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};